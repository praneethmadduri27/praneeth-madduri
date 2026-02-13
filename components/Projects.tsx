import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section className="relative z-20 w-full bg-[#121212] px-6 py-24 md:px-12 md:py-32">
            <div className="mx-auto max-w-7xl">
                <h3 className="mb-16 text-3xl font-medium text-white/80">Key Initiatives</h3>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {projects.map((p, i) => (
                        <Link
                            key={i}
                            href={`/work/${p.slug}`}
                            className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20"
                        >
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className="object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{p.title}</h4>
                                    <p className="text-white/90 mb-4 line-clamp-2 drop-shadow-md font-medium">{p.desc}</p>
                                    <div className="flex items-center justify-between text-sm text-white/80 uppercase tracking-wider font-semibold">
                                        <span>{p.role}</span>
                                        <span>{p.year}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
