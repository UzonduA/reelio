import React from "react";
import Header from "./components/Header";
import { useState } from 'react'
import './App.css'
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome to Reelio</h2>
        
      </main>
    </div>
  );
}