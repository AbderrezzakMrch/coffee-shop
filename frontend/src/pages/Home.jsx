import React from "react";
import Navbar from "../components/Navbar";
import bgImg from '/background/image.png'; 
import CoffeeItems from "../components/CoffeeItems";



function Home() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen">
        {/* Background image */}
        <img 
          src={bgImg} 
          alt="Coffee background" 
          className="w-full h-full object-cover" 
        />

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-16 px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-[#FFFADA] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
            Power up with coffee
          </h1>
          <p className="text-[#CCB9B1] text-lg md:text-3xl lg:text-3xl max-w-2xl">
            Start your exciting day with a cup of Brew Coffee
          </p>
          </div>
            <button className="text-2xl pb-4 bg-gradient-to-r from-[#A0583C] to-[#C08267] hover:from-[#C08267] hover:to-[#A0583C] transition text-[#FFFADA] font-medium rounded-2xl px-14 py-3">
            Explore Us
            </button>
        </div>
      </div>
      <CoffeeItems/>

    </>
  );
}

export default Home;
