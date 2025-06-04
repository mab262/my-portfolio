import Image from "next/image";
import About from '@/components/About';
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
      <div className="min-h-screen flex flex-col items-center p-6 sm:p-12 font-sans">
        <main className="w-full max-w-3xl flex flex-col gap-20">
          <Image
              src="/avatar.jpg"
              alt="Avatar"
              width={100}
              height={100}
              className="rounded-full mx-auto mb-4"
          />

          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}
