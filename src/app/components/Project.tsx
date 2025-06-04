"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section className="px-4 max-w-4xl mx-auto py-10">
            <h2 className="text-3xl font-semibold mb-8 text-center sm:text-left">Projects</h2>

            <div className="grid gap-6 sm:grid-cols-2">
                {visibleProjects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-muted rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200 border border-black/[.05] dark:border-white/[.1]"
                    >
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            {project.description}
                        </p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline font-medium"
                            >
                                View Project
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {projects.length > 3 && (
                <div className="mt-8 text-center space-y-4">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-5 py-2 rounded-full border border-black/10 dark:border-white/20 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>

                    {showAll && (
                        <p className="text-sm text-muted-foreground max-w-md mx-auto">
                            Interested in more of my work or want to dive deeper into a specific project?{" "}
                            <a
                                href="mailto:max@m2222.33mail.com"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                Feel free to get in touch.
                            </a>
                        </p>
                    )}
                </div>
            )}
        </section>
    );
}
