# Reelio

Reelio is a movie database web application that allows users to explore popular and trending movies, search for specific titles, and save their favorites. It fetches data from The Movie Database (TMDb) API and organizes it in a clean, responsive interface. The app also maintains a local database of favorite movies using browser storage, giving users a personalized experience.Reelio is built with **React**, **Vite** **Axios**, and **Tailwind CSS**.  

---
##Key Features

**Movie Discovery:** Browse a curated list of trending and popular movies.

**Search Functionality:** Instantly find movies by title through TMDb’s powerful search API.

**Favorites Management:** Save and remove movies as favorites — stored in the browser’s localStorage so favorites persist even after refreshing.

**Dynamic Movie Modal:** Click on a movie to view detailed information without leaving the page.

**Responsive Navigation:** Includes a mobile-friendly header with Home, About, and Favorites sections that scroll smoothly across the app.

**Local Database Simulation:** Favorites are stored locally, giving the app an offline-like database capability.

**Clean UI & Accessibility:** Designed with Tailwind CSS for a minimal, user-friendly interface.

---
##Purpose

Reelio solves a common problem — finding and organizing movies efficiently.
Instead of juggling multiple streaming platforms or lists, users can quickly browse, search, and keep track of the movies that interest them, all in one place.

---
## Current Progress
- Set up project with **React + Vite** and integrated **Tailwind CSS**.
- Implemented **Header**, **SearchBar**, **MovieList**, and **MovieCard** components.
- Integrated **TMDb API** to display popular movies by default and handle user search queries.
- Added Favorites functionality — users can now save and view their favorite movies, with data      stored locally using localStorage.
- Integrated MovieModal for detailed movie previews when a movie card is clicked.
- Added a responsive About Section and Footer for better site structure and presentation.
- Improved Header navigation with smooth scrolling to “Home” and “About” sections.
- Enhanced mobile responsiveness — navigation menu now adapts across all screen sizes.
- Added state persistence, ensuring that favorites remain saved even after page reloads.

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/UzonduA/reelio
cd reelio
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add your TMDb API key

Create a `.env` file in the project root and add:

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

---

## Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **TMDb API**
* **Axios**
* **React Icons (for icons and mobile menu)**
* **LocalStorage API (for favorites persistence)**
---

## Next Steps
- Add Movie Trailers
- Add Cast & Crew Section.
- Similar Movies Suggestions
- Add user authentication (Sign In / Sign Up).

> The project is now in Sprint 4. Adding more features/functionalities.


