import React from "react";

export default function Contact() {
  return (
    <section className="body-font relative" id="Contacto" data-aos='fade-left'>
      <div className="container md:px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="title-font mb-2 font-medium text-red-600 text-center alfa_slab_one text-5xl">
            Contacto
          </h1>
        </div>
        <div
          className="lg:w-3/4 md:p-20 py-20 px-5 md:w-2/3 mx-auto"
          style={{
            backgroundImage: "url('contact.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex md:flex-wrap max-md:flex-col m-2">
            <div className="p-2 md:w-1/2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-2xl text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-[#e0d5d573] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 md:w-1/2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-2xl text-white">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-[#e0d5d573] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-2xl text-white">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-[#ffffff50] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full flex items-center justify-center">
              <button className="inline-flex text-red-600 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-red-100 hover:scale-105 active:scale-95 alfa_slab_one transition-all duration-300 text-xl font-bold rounded">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
