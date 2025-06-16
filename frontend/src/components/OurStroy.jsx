import React from 'react';
import aboutImage from '/about page/small-coffee-shop-coffee-kyoto-japan-WG9GPP.jpg'; 
import ownerImage from '/about page/barista-serves-portafilter-square-1024x962.png'; 
import arabicCoffeeSet from '/about page/images.jpg'; 
import member3 from '/family/man-working-coffee-shop-young-60248775.webp'
import member2 from '/family/image2-1-1024x683.jpg'
import member1 from '/family/1612675.jpg'




function OurStroy() {
  return (
    <div className="bg-[#FFFADA] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={aboutImage} 
          alt="Qahwat Al-Asala Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Our <span className="text-[#A0583C]">Story</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Our Journey */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#A0583C] mb-6 border-b-4 border-[#C08267] pb-2 inline-block">
                From Humble Beginnings
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2023, Qahwat Al-Asala began as a small coffee stand in the heart of the city, 
                with a mission to bring authentic Arabic coffee traditions to the modern world.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our name, which translates to "Coffee of Authenticity," reflects our commitment to 
                preserving traditional brewing methods while innovating for contemporary tastes.
              </p>
              <p className="text-lg text-gray-700">
                What started as a passion project has grown into a beloved gathering place for coffee 
                enthusiasts and culture seekers alike.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={ownerImage} 
                alt="Founder of Qahwat Al-Asala" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="mb-20 bg-[#a0583c79] bg-opacity-10 p-10 rounded-xl">
          <h2 className="text-3xl font-bold text-[#A0583C] mb-8 text-center">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#A0583C] mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3 text-[#A0583C]">Quality Beans</h3>
              <p className="text-gray-700">
                We source only the finest Arabica beans from sustainable farms in Yemen, Ethiopia, 
                and Saudi Arabia.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#A0583C] mb-4">🧑‍🍳</div>
              <h3 className="text-xl font-semibold mb-3 text-[#A0583C]">Traditional Craft</h3>
              <p className="text-gray-700">
                Our baristas are trained in both modern techniques and centuries-old Arabic 
                coffee preparation methods.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl text-[#A0583C] mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-[#A0583C]">Community First</h3>
              <p className="text-gray-700">
                We believe coffee is about bringing people together, fostering connections 
                and creating memories.
              </p>
            </div>
          </div>
        </section>

        {/* Traditional Coffee Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#A0583C] mb-6 border-b-4 border-[#C08267] pb-2 inline-block">
                Honoring Tradition
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Qahwat Al-Asala, we take pride in serving authentic Arabic coffee 
                prepared in the traditional dallah pot, just as it has been for centuries 
                in Bedouin culture.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our special blend includes lightly roasted beans with a touch of cardamom, 
                served in small cups with dates - the perfect balance of bitterness and sweetness.
              </p>
              <p className="text-lg text-gray-700">
                We welcome you to experience this timeless ritual that symbolizes Arabian 
                hospitality and generosity.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={arabicCoffeeSet} 
                alt="Traditional Arabic Coffee Set" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#A0583C] mb-12">
            Meet Our <span className="text-[#C08267]">Family</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Behind every great cup is a team of passionate individuals dedicated to 
            crafting your perfect coffee experience.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed Al-Mansoori",img: member1, role: "Founder & Master Brewer", bio: "With 15 years of experience in traditional coffee preparation..." },
              { name: "Layla Hassan",img: member2, role: "Head Barista", bio: "Specialist in modern coffee techniques with a love for latte art..." },
              { name: "Yousef Abdullah",img: member3, role: "Bean Sourcer", bio: "Travels directly to coffee farms to ensure the highest quality..." },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <img src={member.img} alt="member image" className='h-full' />
                </div>
                <h3 className="text-xl font-bold text-[#A0583C]">{member.name}</h3>
                <p className="text-[#C08267] mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStroy;
