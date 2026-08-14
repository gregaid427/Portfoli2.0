import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WorkAttitude from "./components/WorkAttitude";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkAttitude />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
