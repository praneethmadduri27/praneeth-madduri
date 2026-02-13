import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="relative w-full">
                {/* ScrollyCanvas Container */}
                <ScrollyCanvas>
                    <Overlay />
                </ScrollyCanvas>

                {/* Projects Section */}
                <Projects />
            </div>
        </main>
    );
}
