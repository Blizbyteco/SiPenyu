import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {

  const [sidebarOpened, setSidebarOpened] = useState(false)

  return (
    <>
      <Sidebar sidebarOpened={sidebarOpened} setSidebarOpened={setSidebarOpened} />
      <div className="w-full flex justify-between items-center px-4 py-6">
        <h1 className="font-bold">Sipenyu</h1>
        <button onClick={() => setSidebarOpened(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
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
    </>
  );
}
