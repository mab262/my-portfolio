import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Max Bennett - Portfolio",
    description:
        "Max Bennett's personal portfolio showcasing projects, skills, and contact information.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        >
        {children}
        </body>
        </html>
    );
}
