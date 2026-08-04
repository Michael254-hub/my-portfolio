import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Expertise } from "@/sections/expertise";
import { Projects } from "@/sections/projects";
import { Contact } from "@/sections/contact";

function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
