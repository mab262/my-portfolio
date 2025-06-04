// src/app/layout.tsx
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Max Bennett | Computer Science Portfolio",
    description: "Computer Science student showcasing projects, skills, and contact info.",
    icons: "/favicon.ico",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={GeistSans.className}>
        <body className="bg-background text-foreground min-h-screen flex flex-col">{children}</body>
        </html>
    );
}
