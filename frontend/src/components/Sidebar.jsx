import React, { useState } from "react";
import { easeIn, easeOut, motion } from 'framer-motion'

export default function Sidebar({sidebarOpened, setSidebarOpened}) {

  const sidebarVariants = {
    hidden: {
      y: '-150%',
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    },

    show: {
      y: 0,
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
    className="w-full fixed h-screen z-10 bg-black text-white">
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
          <h2 className="hover:cursor-pointer">Home</h2>
          <h2 className="hover:cursor-pointer">Data</h2>
          <h2 className="hover:cursor-pointer">Chart</h2>
          <h2 className="hover:cursor-pointer">About</h2>
          <h2 className="hover:cursor-pointer">contact</h2>
      </div>
    </motion.div>
  );
}
