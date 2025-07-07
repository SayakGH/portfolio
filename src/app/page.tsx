import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import React from "react";
import Experience from "@/component/experience";
import About from "@/component/about";
import Skills from "@/component/skills";
import Contact from "@/component/contact";
import Footer from "@/component/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
