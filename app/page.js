import React from "react";
import Navbar from "../components/navbar/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Explore from "./sections/explore.jsx"
import Footer from "./sections/footer.jsx";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Footer />
    </main>
  );
}
