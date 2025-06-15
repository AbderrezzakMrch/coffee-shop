import React from "react";
import insta from "/social media icons/instagram.png"
import facebk from "/social media icons/facebook-logo.png"
import twitter from "/social media icons/twitter.png"
import pintress from "/social media icons/social.png"




function Contact() {

  return (
    <section className="px-4 py-8 md:px-10 bg-[#C08267]" id="Contact us">
        {/* First Header */}
        <div className="flex items-center justify-center my-10">
        <div className="border-t-8 border-[#FFFADA] flex-grow mx-4"></div>
        <h2 className="text-2xl md:text-3xl text-[#FFFADA] font-semibold whitespace-nowrap">
            Get in Touch with Us
        </h2>
        <div className="border-t-8 border-[#FFFADA] flex-grow mx-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white py-16 px-4 md:px-20">
            <div>
                <h2 className="font-bold text-3xl">Merchandise</h2>
                <h3 className="text-2xl"><a href="#">T-shirts</a></h3>
                <h3 className="text-2xl"><a href="#">Caps</a></h3>
                <h3 className="text-2xl"><a href="#">Masks</a></h3>
            </div>
            <div>
                <h2 className="font-bold text-3xl">Franchise</h2>
                <h3 className="text-2xl"><a href="#">Coffee Outlet</a></h3>
                <h3 className="text-2xl"><a href="#">Coffee Vending Machine</a></h3>
                <h3 className="text-2xl"><a href="#">Contact Us</a></h3>
            </div>
            <div>
                <h2 className="font-bold text-3xl">About Us</h2>
                <h3 className="text-2xl"><a href="#">Promotions</a></h3>
                <h3 className="text-2xl"><a href="#">Customer Care</a></h3>
                <h3 className="text-2xl"><a href="#">Legal Information</a></h3>
                <h3 className="text-2xl"><a href="#">Achievements </a></h3>
                <h3 className="text-2xl"><a href="#">Careers</a></h3>
            </div>
            <div>
                <h2 className="font-bold text-3xl">Follow Us</h2>
                <h2 className="flex w-1/2 gap-3.5">
                <span>
                    <a href="#"><img src={insta} alt="instagram logo"/></a>
               </span>
                <span>
                    <a href="#"><img src={facebk} alt="facebook logo" /></a>
               </span>
                <span>
                    <a href="#"><img src={twitter} alt="twitter logo" /></a>
               </span>
                <span>
                    <a href="#"><img src={pintress} alt="pintress logo" /></a>
               </span>
                </h2>
            </div>
        </div>
    </section>
  );
}

export default Contact;
