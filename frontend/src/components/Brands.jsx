import React from "react";
import img1 from "/brands/image1.png"
import img2 from "/brands/image2.png"
import img3 from "/brands/image3.png"
import img4 from "/brands/image4.png"

function Brands() {

    const brands = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        }
    ]
  return (
    <section className="px-4 py-12 md:px-10">
        {/* First Header */}
        <div className="flex items-center justify-center my-10">
        <div className="border-t-8 border-[#A0583C] flex-grow mx-4"></div>
        <h2 className="text-2xl md:text-3xl text-[#A0583C] font-semibold whitespace-nowrap">
            Brands We Work With
        </h2>
        <div className="border-t-8 border-[#A0583C] flex-grow mx-4"></div>
        </div>


        
        {/* Coffee Cards */}
          <div className="flex justify-evenly items-center gap-10 pt-12">
            {brands.map((brand, idx) => (
            <div key={idx}>
                <img src={brand.img} alt="Brands We Work With "/>
            </div> ))}

        </div>
    </section>
  );
}

export default Brands;
