import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header({ onFavoritesClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
    
        <a href="/" className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-red-500"
            aria-hidden="true"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" fill="currentColor" />
            <path d="M7 18v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17 18v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          <span className="text-2xl font-bold text-gray-900">Reelio</span>
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-gray-600 hover:text-red-400">Home</a>
          <a href="#" className="text-gray-600 hover:text-red-400">About</a>
          <button
            className="text-gray-600 hover:text-red-400 transition"
            onClick={onFavoritesClick}
          >
            Favorites ❤️
          </button>

        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700 text-sm">Sign In</button>
        </div>

        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-4 space-y-2">
            <a href="#" className="block text-gray-700">Home</a>
            <a href="#" className="block text-gray-700">About</a>
          </nav>
        </div>
      )}
    </header>
  );
}
