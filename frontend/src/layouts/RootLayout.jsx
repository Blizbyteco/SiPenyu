import React, { useEffect, useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function RootLayout() {

  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [title, setTitle] = useState("Sipenyu Muda")
  const location = useLocation()

  useEffect(() => {
    console.log(location.pathname)
    if (location.pathname.includes("downloads")) {
      setTitle("Halaman Download")
    } else {
      setTitle("Sipenyu Muda")
    }

    setSidebarOpened(false)
  }, [location])

  // handle scrolling effect
  const [isScrolling, setIsScrolling] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 50) {
      setIsScrolling(true)
    }else if (location.pathname == "/") {
      setIsScrolling(false)
    }
  })


  useMemo(() => {
    if (location.pathname == "/") {
      setIsScrolling(false)
    } else {
      setIsScrolling(true)
    }
  }, [location.pathname])


  return (
    <>
      <Sidebar sidebarOpened={sidebarOpened} setSidebarOpened={setSidebarOpened} />
      <div className={`fixed z-30 top-0 left-0 w-full flex justify-between items-center px-4 py-6 ease-in duration-200  ${isScrolling ? "text-black bg-white" : "text-white bg-opacity-0"}`}>
        <h1 className="">{title}</h1>
        <button onClick={() => setSidebarOpened(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isScrolling ? 'black' : 'white'}
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <Outlet />
      <footer className="py-6">
                <h2 className="text-sm text-gray-400 text-center">© 2024  Si Penyu Muda. All rights reserved.</h2>
      </footer>
    </>
  );
}
