import Image from "next/image";

const projects = [
  {
    name: "My Portfolio Website",
    description: "Built with Next.js, Tailwind CSS, and deployed on Vercel.",
    link: "https://github.com/mab262/my-portfolio",
  },
  {
    name: "Open Source Contribution",
    description: "Contributed bug fixes and features to React ecosystem.",
    link: "https://github.com/your-other-project",
  },
  {
    name: "Data Visualizer App",
    description: "An interactive web app to visualize data trends.",
    link: "https://datavis.example.com",
  },
];

export default function Home() {
  return (
      <main className="min-h-screen max-w-4xl mx-auto p-8 sm:p-16 flex flex-col gap-12 font-[family-name:var(--font-geist-sans)]">
        {/* Header */}
        <header className="flex flex-col items-center sm:items-start gap-4">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-600">Max Bennett</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl text-center sm:text-left">
            A passionate Computer Science student & aspiring software engineer,
            skilled in modern web development, data analysis, and problem-solving.
          </p>
        </header>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <ul className="flex flex-wrap gap-4 text-sm font-mono">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Python",
              "Git & GitHub",
              "SQL",
            ].map((skill) => (
                <li
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  {skill}
                </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map(({ name, description, link }) => (
                <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                    {name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{description}</p>
                </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Feel free to reach out to me on{" "}
            <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
            >
              LinkedIn
            </a>{" "}
            or check out my{" "}
            <a
                href="https://github.com/mab262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
            >
              GitHub
            </a>
            .
          </p>
          <a
              href="mailto:your.email@example.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Email Me
          </a>
        </section>
      </main>
  );
}
