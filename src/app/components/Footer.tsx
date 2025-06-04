export default function Footer() {
    return (
        <footer className="w-full mt-20 border-t border-black/[0.05] dark:border-white/[0.1] py-6 text-center text-sm text-muted-foreground px-4">
            <p className="mb-1">
                © {new Date().getFullYear()} <span className="font-medium">Max Bennett</span>. All rights reserved.
            </p>
            <p className="text-xs">
                Built with{" "}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Next.js
                </a>{" "}
                &{" "}
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Tailwind CSS
                </a>
                .
            </p>
        </footer>
    );
}
