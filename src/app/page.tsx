import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </>
  );
}
