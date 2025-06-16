import React from "react";
import Coffee from "../components/coffee";
import Footer from "../components/footer";
import aboutImage from '/about page/small-coffee-shop-coffee-kyoto-japan-WG9GPP.jpg'; 


function Menu() {


    return(
    <>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={aboutImage} 
          alt="Qahwat Al-Asala Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Our <span className="text-[#A0583C]">Menu</span>
          </h1>
        </div>
      </section>
        <Coffee/>
        <Footer/>
    </>
    );
}


export default Menu;