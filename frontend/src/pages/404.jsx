import React from "react";;
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-primary px-6 text-white">
      <img src="/img/illustrasi/404.webp" alt="icon" />
      <h1 className="text-4xl font-semibold">
        Maaf, halaman yang Anda cari tidak ditemukan
      </h1>
      <p className="text-xl mt-4 font-light">
        Silakan periksa kembali URL yang anda inputkan atau kembali ke menu
        utama.
      </p>

      {/* should be a components */}
      <Link to="/" className="flex items-center gap-x-2 w-max bg-secondary px-4 py-2 rounded-md mt-8 text-sm font-medium">
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
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Kembali ke Menu Utama
      </Link>
    </div>
  );
}
