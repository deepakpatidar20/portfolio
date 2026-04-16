import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Education />
      <About />
      <Contact />
    </>
  );
}

export default App;