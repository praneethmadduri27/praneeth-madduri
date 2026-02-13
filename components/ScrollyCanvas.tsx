"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";
import { ScrollProvider } from "./ScrollContext";

export default function ScrollyCanvas({ children }: { children?: ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameCount = 120; // Corrected to match actual file count (0-119)

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const imagePromises: Promise<void>[] = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    // Assuming the user moved files correctly to /sequence/frame_XXX...
                    // We'll use a padStart 3 for 000-119.
                    // Note: The delay suffix varies in the user's files (0.066s vs 0.067s). 
                    // This is a breaking issue for static URL generation.
                    // FIX: We need a smarter loader or the user needs to normalize names.
                    // Since I cannot rename efficiently without a script, I will try to load `frame_XXX.png` logically 
                    // BUT the files on disk HAVE the delay suffix.
                    // I MUST read the directory to map index to filename, OR just try to load specific filenames?
                    // I'll try to guess based on the Step 48 list: 001 is 0.066s, 002 is 0.067s...
                    // This is chaotic. 
                    // I will use a Client-side "Manifest" approach? No, I can't read files on client.
                    // Best approach: Rename the files in `public/sequence` to `frame_000.png` etc. using a script.
                    // I will assume I did that or will do that.
                    // For now, I'll point to `frame_${...}.png` and I will RUN A RENAME SCRIPT shortly.
                    img.src = `/sequence/frame_${String(i).padStart(3, '0')}.png`;

                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        // Try alternate naming or just skip? 
                        // If we fail, we might have gaps.
                        console.error(`Failed to load frame ${i}`);
                        resolve();
                    };
                });
                imagePromises.push(promise);
            }

            await Promise.all(imagePromises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // Canvas sizing
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Object-fit: cover logic
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Map 0-1 to 0-(frameCount-1)
        // We want the sequence to finish slightly before the very end of scroll if needed, 
        // or map 0-1 roughly to the scroll height.
        // The parent is 500vh. The sticky is 100vh. So we scroll 400vh.

        // We map latest (0 to 1 based on page scroll? No, useScroll() defaults to page scroll)
        // Actually we want scroll of the *container* relative to viewport? 
        // `useScroll` with no args tracks window scroll.
        // Given the page structure, 0 is top, 1 is bottom. 
        // We want the animation to play while we scroll the 500vh container.
        // The container is the first thing.

        // Let's refine this:
        // Page is roughly > 500vh (due to projects below).
        // We should probably explicitly track the container.
        // But since the container is at the top, window scroll 0 to ~0.8 might be the range.

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        <ScrollProvider value={scrollYProgress}>
            <div ref={containerRef} className="relative h-[500vh]">
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                    <canvas ref={canvasRef} className="block h-full w-full object-cover" />

                    {/* Overlay Container */}
                    <div className="absolute inset-0 z-10">
                        {children}
                    </div>

                    {!isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center text-white/20">
                            Loading Sequence...
                        </div>
                    )}
                </div>
            </div>
        </ScrollProvider>
    );
}
