"use client";

import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Contact() {
    return (
        <section className="mt-10 max-w-3xl w-full">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {/* Email */}
                <a
                    href="mailto:max@m2222.33mail.com"
                    className="flex items-center gap-3 rounded-xl border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 px-5 py-3 transition-colors"
                >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm font-medium">Email Me</span>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/mab262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-90 px-5 py-3 transition"
                >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">GitHub Profile</span>
                </a>

                {/* LinkedIn (Optional) */}
                <a
                    href="https://www.linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 px-5 py-3 transition"
                >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>

                {/* Resume (Optional) */}
                <a
                    href="/your_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 px-5 py-3 transition"
                >
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium">View Resume</span>
                </a>
            </div>
        </section>
    );
}
