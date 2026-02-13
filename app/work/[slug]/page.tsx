import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

interface Props {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return projects.map((p) => ({
        slug: p.slug,
    }));
}

export default function ProjectPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#121212] text-white selection:bg-white/20">
            <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
                {/* Back Link */}
                <Link
                    href="/"
                    className="group mb-12 inline-flex items-center text-sm text-white/50 transition-colors hover:text-white"
                >
                    <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
                    Back to Projects
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-white/60">
                        <span className="rounded-full border border-white/10 px-4 py-1 text-sm">
                            {project.role}
                        </span>
                        <span className="text-sm">{project.year}</span>
                    </div>
                </header>

                {/* Content */}
                <article className="prose prose-invert max-w-none">
                    <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                        <p className="text-lg leading-relaxed text-white/80">
                            {project.details}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                            <h4 className="text-lg font-medium text-white mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono bg-white/10 text-white/70 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
