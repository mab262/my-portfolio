import Image from "next/image";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-2xl w-full">
          {/* Logo */}
          <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
          />

          {/* About Me */}
          <section className="text-center sm:text-left">
            <h1 className="text-3xl font-bold mb-2">Hi, I'm [Your Name]</h1>
            <p className="text-base text-muted-foreground">
              A passionate Computer Science student building web apps with Next.js, TypeScript, and everything modern.
            </p>
          </section>

          {/* Projects */}
          <section className="w-full">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <ul className="space-y-4">
              <li className="bg-muted rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <h3 className="font-medium text-lg">📱 Portfolio Website</h3>
                <p className="text-sm text-muted-foreground">
                  This very site – built with Next.js, Tailwind, and deployed on Vercel.
                </p>
              </li>
              <li className="bg-muted rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <h3 className="font-medium text-lg">🧠 AI Chatbot (in progress)</h3>
                <p className="text-sm text-muted-foreground">
                  A smart assistant trained on my CS notes and projects using LangChain & OpenAI.
                </p>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="w-full">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-black/[.05] dark:bg-white/[.1] rounded-full px-3 py-1">JavaScript</span>
              <span className="bg-black/[.05] dark:bg-white/[.1] rounded-full px-3 py-1">TypeScript</span>
              <span className="bg-black/[.05] dark:bg-white/[.1] rounded-full px-3 py-1">Next.js</span>
              <span className="bg-black/[.05] dark:bg-white/[.1] rounded-full px-3 py-1">Python</span>
              <span className="bg-black/[.05] dark:bg-white/[.1] rounded-full px-3 py-1">Tailwind CSS</span>
            </div>
          </section>

          {/* Contact */}
          <div className="mt-6 flex gap-4">
            <a
                href="mailto:you@example.com"
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] font-medium text-sm sm:text-base h-10 sm:h-12 px-5"
            >
              Get in Touch
            </a>
            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-5"
            >
              GitHub ↗
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Your Name</span>
          <a href="https://nextjs.org" target="_blank" className="hover:underline">
            Built with Next.js
          </a>
        </footer>
      </div>
  );
}
