import Image from "next/image";
import Link from "next/link";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Git",
  "SQL",
];

const projects = [
  {
    name: "My Portfolio Website",
    description: "Built with Next.js and Tailwind CSS, deployed on Vercel.",
    link: "https://github.com/mab262/my-portfolio",
  },
  {
    name: "Data Visualizer",
    description: "Interactive charts using D3 and Next.js.",
    link: "#",
  },
  {
    name: "Open Source PR",
    description: "Contributed to a React UI library.",
    link: "#",
  },
];

export default function Home() {
  return (
      <div className="min-h-screen max-w-3xl mx-auto px-6 py-20 flex flex-col gap-20 font-[family-name:var(--font-geist-sans)]">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Max Bennett</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            Computer Science student & aspiring software engineer focused on building clean, modern web experiences.
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-3 text-sm font-mono">
            {skills.map((skill) => (
                <li
                    key={skill}
                    className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                >
                  {skill}
                </li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project) => (
                <Link
                    href={project.link}
                    key={project.name}
                    className="block border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.description}
                  </p>
                </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Connect on{" "}
            <a
                href="https://linkedin.com/in/your-linkedin"
                className="text-blue-600 underline"
                target="_blank"
            >
              LinkedIn
            </a>{" "}
            or check out my{" "}
            <a
                href="https://github.com/mab262"
                className="text-blue-600 underline"
                target="_blank"
            >
              GitHub
            </a>
            .
          </p>
          <a
              href="mailto:your.email@example.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Email Me
          </a>
        </section>
      </div>
  );
}
