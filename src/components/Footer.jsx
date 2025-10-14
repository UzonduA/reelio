import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="text-red-400 font-semibold">Reelio</span>. 
          All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ using React and The Movie Database (TMDB) API.
        </p>
      </div>
    </footer>
  );
}
