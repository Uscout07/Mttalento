"use client";

import { useEffect } from 'react';
import Header from "./my_components/Header"; 
import Hero from "./my_components/Hero";
import About_us from "./my_components/About_us";
import Services from "./my_components/Services";
import ActorSlider from './my_components/ActorsSlider';
import Contact from "./my_components/Contact";
import Footer from "./my_components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <main>
      <Header/> 
      <Hero/>
      <About_us/>
      <Services/>
      <ActorSlider/>

      <Contact/>
      <Footer/>
    </main>
  );
}
