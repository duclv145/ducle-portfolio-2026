import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
      </main>
      <Contact />
    </>
  );
}
