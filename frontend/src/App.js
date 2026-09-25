import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <div id="about" />
        <Skills />
        <Experience />
        <Projects />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
