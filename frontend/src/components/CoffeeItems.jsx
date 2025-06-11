import React from "react";
import Sightglass_Coffee from "/coffees/Sightglass_Coffee.jpg"
import mocha from "/coffees/mocha.webp"
import latte from "/coffees/latte.jpg"
import cold_java from "/coffees/cold_java.jpg"


function CoffeeItems() {

const coffees = [
  {
    title: "Cappacino",
    price: "$8.60",
    img: Sightglass_Coffee,
    description:
      "A rich and creamy blend with a perfect layer of foam – a timeless favorite to start your day.",
  },
  {
    title: "Mocha",
    price: "$9.20",
    img: mocha,
    description:
      "A delicious fusion of espresso, chocolate, and steamed milk – perfect for chocolate lovers.",
  },
  {
    title: "Latte",
    price: "$11.40",
    img: latte,
    description:
      "Smooth and mellow espresso balanced with silky steamed milk – a comforting classic.",
  },
  {
    title: "Cold Java",
    price: "$6.40",
    img: cold_java,
    description:
      "Bold, chilled coffee served over ice – the ultimate refreshment for any time of day.",
  },
];
  return (
    <section className="px-4 py-12 md:px-10">
        {/* First Header */}
        <div className="flex items-center justify-center my-10">
        <div className="border-t-8 border-[#A0583C] flex-grow mx-4"></div>
        <h2 className="text-2xl md:text-3xl text-[#A0583C] font-semibold whitespace-nowrap">
            Explore the Coffee World
        </h2>
        <div className="border-t-8 border-[#A0583C] flex-grow mx-4"></div>
        </div>

        {/* Coffee Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            {coffees.map((coffee, idx) => (
            <div key={idx} className="bg-[#C08267] p-3.5 rounded-3xl">
                <img src={coffee.img} alt="Coffee" className="rounded-3xl h-[260px] w-full" />
                <h2 className="mt-2.5 text-2xl text-white font-bold">{coffee.title}</h2>
                <p className="mt-2.5 text-[#FFFADA]">{coffee.description}</p>
                <div className="mt-10 flex justify-between items-center">
                    <span className="text-2xl text-white font-bold">{coffee.price}</span>
                    <button className="text-xl text-white py-2 px-4 rounded-2xl  bg-[#A0583C] hover:bg-[#dda491] transition">Order now</button>
                </div>
            </div> ))}

        </div>
    </section>
  );
}

export default CoffeeItems;

