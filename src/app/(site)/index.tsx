"use client";

import React from "react";



export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col w-full h-80 bg-[url('../../public/assets/images/home2.jpg')] bg-cover bg-center items-center justify-center">
        <h2 className="font-bold text-4xl text-white text-left p-4 mb-5">
          Don&apos;t miss out! <br />
          Explore the <span className="text-[#FFE047]">vibrant events</span> happening locally and globally.
        </h2>
        
      </div>
    </main>
  );
}