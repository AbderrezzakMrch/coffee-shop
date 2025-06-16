import React from "react";
import Sightglass_Coffee from "/coffees/Sightglass_Coffee.jpg";
import mocha from "/coffees/mocha.webp";
import latte from "/coffees/latte.jpg";
import cold_java from "/coffees/cold_java.jpg";
import arabic_coffee from "/coffees/arabic coffe.jpg"; // Consider adding traditional options
import turkish_coffee from "/coffees/turkich coffe.jpg";


function Coffee() {
      const coffees = [
    {
      title: "Cappuccino",
      price: "8.60 SAR",
      img: Sightglass_Coffee,
      description: "Rich espresso with velvety foam and steamed milk",
      origin: "Italy",
      strength: "Medium"
    },
    {
      title: "Mocha",
      price: "9.20 SAR",
      img: mocha,
      description: "Espresso with chocolate syrup and steamed milk",
      origin: "Yemen",
      strength: "Medium"
    },
    {
      title: "Latte",
      price: "11.40 SAR",
      img: latte,
      description: "Smooth espresso with generous steamed milk",
      origin: "Italy",
      strength: "Mild"
    },
    {
      title: "Iced Coffee",
      price: "6.40 SAR",
      img: cold_java,
      description: "Chilled arabica coffee with ice cubes",
      origin: "International",
      strength: "Strong"
    },
    {
      title: "Arabic Coffee",
      price: "5.00 SAR",
      img: arabic_coffee,
      description: "Traditional light roast with cardamom",
      origin: "Saudi Arabia",
      strength: "Medium"
    },
    {
      title: "Turkish Coffee",
      price: "7.50 SAR",
      img: turkish_coffee,
      description: "Finely ground coffee boiled in special pot",
      origin: "Turkey",
      strength: "Very Strong"
    }
  ];

    return(    
    <section className="px-4 py-12 md:px-10 bg-[#FFFADA]" id="menu">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-[#A0583C] font-bold mb-4">
          قهوة الأصالة Menu
        </h2>
        <div className="flex justify-center">
          <div className="border-t-4 border-[#A0583C] w-24"></div>
        </div>
        <p className="mt-4 text-[#A0583C] text-lg max-w-2xl mx-auto">
          Discover our authentic blends from traditional Arabic coffee to modern specialties
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffees.map((coffee, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Coffee Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={coffee.img} 
                alt={coffee.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Origin Tag */}
              <span className="absolute top-3 right-3 bg-[#A0583C] text-white px-3 py-1 rounded-full text-sm">
                {coffee.origin}
              </span>
            </div>

            {/* Coffee Details */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-[#A0583C]">{coffee.title}</h3>
                <span className="text-xl font-semibold text-[#C08267]">{coffee.price}</span>
              </div>
              
              <p className="mt-3 text-gray-600">{coffee.description}</p>
              
              {/* Strength Indicator */}
              <div className="mt-4 flex items-center">
                <span className="text-sm text-[#A0583C] mr-2">Strength:</span>
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-3 h-3 rounded-full mx-0.5 ${i < {
                      'Very Strong': 4,
                      'Strong': 3,
                      'Medium': 2,
                      'Mild': 1
                    }[coffee.strength] ? 'bg-[#A0583C]' : 'bg-gray-200'}`}
                  />
                ))}
              </div>

              {/* Order Button */}
              <button className="mt-6 w-full bg-[#A0583C] hover:bg-[#C08267] text-white py-3 px-6 rounded-lg transition-colors duration-300 font-medium">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>);
}

export default Coffee;

