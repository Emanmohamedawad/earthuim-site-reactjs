import { useEffect } from 'react';
import React from 'react';
import Blogs from "./Components/Blogs";
import Buysell from "./Components/Buysell";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollTotop";
import Designs from "./Components/Designes";
import scrollreveal from "scrollreveal";

export default function App() {

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        #home,
        #buySell1,
        #buySell2,
        #buySell3,
        #blogs,
        footer
    `,
        {
          opacity: 0,
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementById("home");
    home.style.transform = "none";
  }, 1500);


  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Designs /> 
      <Buysell />
      <Blogs />
      <Footer />
    </div>
  );
}
