import React from 'react'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row justify-between flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img className='w-10' src='logo.png'/>
      <span className="ml-3 text-xl">MT TALENTO</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 mttalento
    </p>
    <span className="flex sm:ml-auto sm:mt-0 mt-4 justify-center">
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Website by-Parikalpana.io
    </p>
    </span>
  </div>
</footer>
  )
}
