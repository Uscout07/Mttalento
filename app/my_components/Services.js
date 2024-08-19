import React from "react";
import { Icon } from "@iconify/react";

export default function Services() {
  return (
    <section className="text-gray-600 body-font" id='Servicios'>
      <h1 className="title-font mb-2 font-medium text-red-600 text-center alfa_slab_one text-5xl ">
      Servicios
      </h1>
      <div className="container px-5 py-20 mx-auto" >
        <div className="flex items-center lg:w-[70%] mx-auto pb-10 mb-10 border-gray-200 sm:flex-row flex-col" data-aos='fade-right'>
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 flex-shrink-0">
            <Icon icon="ic:twotone-movie" className="text-red-600 text-7xl max-md:text-5xl" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-red-600 alfa_slab_one text-3xl title-font font-medium mb-2">
              Services #1
            </h2>
            <p className="leading-relaxed">
              Ullamco veniam in sunt dolore occaecat duis est elit cupidatat
              pariatur pariatur in eu eiusmod. Ipsum irure magna ex minim est
              aute minim mollit exercitation amet ad voluptate quis voluptate.
              Tempor ut id sunt aliqua ex non veniam culpa in.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-[70%] mx-auto pb-10 mb-10 border-gray-200 sm:flex-row flex-col-reverse" data-aos='fade-left'>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 md:pr-10">
            <h2 className="text-red-600 alfa_slab_one text-3xl title-font md:text-right font-medium mb-2">
              Services #2
            </h2>
            <p className="leading-relaxed md:text-right">
              Excepteur ullamco nulla est sunt in anim. Eiusmod qui veniam
              aliquip consequat dolore. Officia ad dolore esse aute eu
              consectetur velit labore. Amet anim duis proident incididunt ad
              deserunt in Lorem. Aliquip amet minim voluptate dolore commodo
              nostrud minim ad id eu tempor.
            </p>
          </div>
          <div className="sm:w-32 sm:h-32 h-20 w-20  inline-flex items-center justify-center rounded-full bg-red-100 flex-shrink-0">
            <Icon
              icon="clarity:camera-solid"
              className="text-red-600 max-md:text-5xl text-7xl"
            />
          </div>
        </div>
        <div className="flex items-center lg:w-[70%] mx-auto sm:flex-row flex-col" data-aos='fade-right'>
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 flex-shrink-0">
            <Icon icon="ion:person" className="text-red-600 max-md:text-5xl text-7xl" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-red-600 alfa_slab_one text-3xl title-font font-medium mb-2">
              Services #3
            </h2>
            <p className="leading-relaxed text-base">
              Aliqua aliquip occaecat Lorem in quis sit sunt voluptate.
              Incididunt aliqua laborum mollit nulla et exercitation ut occaecat
              duis anim ea. Minim velit in aliquip commodo enim proident veniam
              consectetur ullamco. Id in exercitation consectetur aliquip sit
              velit veniam adipisicing. Ad dolor magna commodo mollit eiusmod
              qui anim elit ipsum reprehenderit veniam enim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
