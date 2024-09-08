import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full md:h-[12vh] h-[8vh] bg-white border-b-2 border-red-500 z-50 max-md:py-2">
      <div className="container mx-auto flex p-2 flex-row items-center justify-between lg:px-10 lg:pt-3">
        {/* Logo Section */}
        <a className="flex title-font font-medium items-center text-gray-900">
          <img className='w-20 max-lg:w-[7vh]' src='logo.png' alt='Logo' />
        </a>
        
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu}>
            <Icon
              className='text-[#EE0102] text-[2em]'
              icon={isOpen ? 'mdi:close' : 'mdi:menu'}
            />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`lg:flex lg:items-center lg:w-auto lg:space-x-10 max-lg:flex-wrap max-lg:flex-shrink z-40 transition-all duration-300 ${
            isOpen ? 'fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center max-lg:justify-center' : 'hidden'
          } lg:static lg:bg-transparent lg:h-auto lg:flex-row lg:flex`}
        >
          <a className="mb-5 lg:mb-0 text-4xl lg:text-2xl alegreya_sans_sc text-[#EE0102]" href='#'>Inicio</a>
          <a className="mb-5 lg:mb-0 text-4xl lg:text-2xl alegreya_sans_sc text-[#EE0102]" href='#Sobre'>Lo Que Hacemos</a>
          <a className="mb-5 lg:mb-0 text-4xl lg:text-2xl alegreya_sans_sc text-[#EE0102]" href='#Servicios'>Servicios</a>
          <a className="mb-5 lg:mb-0 text-4xl lg:text-2xl alegreya_sans_sc text-[#EE0102]" href='#Actors'>Actors</a>
        </nav>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Icon className='text-[#EE0102] text-[2em]' icon="iconoir:instagram" />
          <Icon className='text-[#EE0102] text-[1.63em]' icon="streamline:facebook-1" />
        </div>
      </div>
    </header>
  );
}
