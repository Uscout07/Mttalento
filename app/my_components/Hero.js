import React from "react";
import { Icon } from "@iconify/react";

export default function HeroSection() {

  return (
    <section
      className="h-[90vh] flex flex-col items-center justify-center md:mt-[12vh]"
      style={{
        backgroundImage: "url('/herobackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos='fade-in'
    >
      <h1 className="title-font text-6xl max-md:text-2xl mb-4 font-bold text-left text-white alfa_slab_one justify-center">
        COMINANDO DE LA MANO
        <br />
        CON NUESTRO TALENTO PARA <br />
        <span className="text-red-500 text-5xl md:text-7xl">PROTAGONIZAR</span>
      </h1>

      <p className="mb-8 leading-relaxed flex items-center text-white text-2xl alfa_slab_one">
        MADE IN <Icon className="mr-2 ml-3" icon="twemoji:flag-mexico" />{" "}
        <Icon icon="twemoji:flag-us-outlying-islands" />
      </p>
      <div className="flex justify-center">
        <a href="#Contacto">
          <button className="inline-flex text-red-600 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-red-100 hover:scale-95 active:scale-90 alfa_slab_one transition-all duration-300 text-xl font-bold rounded">
            Ponte en contacto
          </button>
        </a>
      </div>
    </section>
  );
}
