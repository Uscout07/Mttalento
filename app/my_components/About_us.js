import React from "react";

export default function About_us() {
  return (
    <section className="text-gray-600 body-font" id='Sobre'>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" data-aos='fade-up'>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%]  mb-10 md:mb-0 flex justify-center">
          <img
            className="object-cover object-center rounded md:h-[80vh] h-[50vh] "
            alt="About_Us"
            src="about_us_image.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font mb-4 font-medium text-red-600 alfa_slab_one text-5xl ">
            Lo Que Hacemos
          </h1>
          <p className="mb-8 leading-relaxed max-md:px-4 max-md:text-left" data-aos='fade-left'>
            Lorem ipsum dolor sit amet consectetur. Non aliquet cursus aliquam
            est vivamus. Non aliquet suspendisse arcu ullamcorper. Pharetra
            pharetra in magna integer vitae. Faucibus in sodales at metus
            laoreet auctor in viverra. Massa at amet eu aliquet ultricies
            egestas. Nisl vivamus ridiculus molestie pharetra at viverra viverra
            aliquam. Tincidunt malesuada sit varius tellus porta morbi. Enim
            morbi donec urna leo proin. Faucibus odio quis sit varius lacus
            blandit gravida. Ut tristique cursus dui et viverra quis leo. Lorem
            ipsum dolor sit amet consectetur. Non aliquet cursus aliquam est
            vivamus. Non aliquet suspendisse arcu ullamcorper. Pharetra pharetra
            in magna integer vitae. Faucibus in sodales at metus laoreet auctor
            in viverra. Massa at amet eu aliquet ultricies egestas. Nisl vivamus
            ridiculus molestie pharetra at viverra viverra aliquam. Tincidunt
            malesuada sit varius tellus porta morbi. Enim morbi donec urna leo
            proin. Faucibus odio quis sit varius lacus blandit gravida. Ut
            tristique cursus dui et viverra quis leo.
          </p>
        </div>
      </div>
    </section>
  );
}
