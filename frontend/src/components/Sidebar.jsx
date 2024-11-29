import React, { useState } from "react";
import { easeIn, easeOut, motion } from 'framer-motion'
import { Link } from "react-router-dom";

export default function Sidebar({sidebarOpened, setSidebarOpened}) {

  const sidebarVariants = {
    hidden: {
      x: '-150%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    },

    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeIn
      }
    }
  }

  return (
    <motion.div 
    initial='hidden'
    animate={sidebarOpened ? 'show' : 'hidden'}
    variants={sidebarVariants}
    className="w-full fixed z-50 h-screen bg-black text-white">
      <div className="w-full flex justify-end p-6 flex-grow-0  text-white">
        <button className="hover:cursor-pointer" onClick={() => setSidebarOpened(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
    
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
        </button>
      </div>

      <div className="w-full h-full text-white text-4xl flex flex-col justify-center items-center gap-y-12">
          <Link to="/" className="hover:cursor-pointer">Beranda</Link>
          <a href="/#statistik" className="hover:cursor-pointer">Statistik</a>
          <a href="/#data" className="hover:cursor-pointer">Data</a>
          <a href="/#about" className="hover:cursor-pointer">Tentang</a>
          <a href="/#contact" className="hover:cursor-pointer">Kontak</a>
      </div>
    </motion.div>
  );
}
