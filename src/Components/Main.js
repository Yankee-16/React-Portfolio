import React from "react";
import "./style.css";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Quotes from "./Quotes";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Projects />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
}
