import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-800 text-white py-16 mt-10">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-red-400">About Reelio</h2>
        <p className="text-gray-300 leading-relaxed">
          Reelio is a simple movie discovery web app built using React and the TMDB API. 
          It allows users to explore trending movies, search for titles, 
          and save favorites for later viewing. 
        </p>

        <p className="text-gray-400 mt-4">
          This project was developed as part of a learning journey to understand API integration, 
          component-based architecture, and React state management.
        </p>
      </div>
    </section>
  );
}
