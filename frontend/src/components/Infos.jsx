import React from 'react';
import aboutImage from '/about page/small-coffee-shop-coffee-kyoto-japan-WG9GPP.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Infos() {
  return (
<div className="bg-[#FFFADA] min-h-screen">
        {/* contact bg with text */}
        <section className="relative h-96 overflow-hidden">
        <img 
          src={aboutImage} 
          alt="Qahwat Al-Asala Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
            Contact <span className="text-[#A0583C]">us</span>
          </h1>
        </div>
      </section>

            {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#A0583C] border-b-4 border-[#C08267] pb-2 inline-block">
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#A0583C] mt-1">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#A0583C]">Our Location</h3>
                  <p className="text-gray-700">38 Rue Yagoubi Mohamed, Bir El Djir, Oran, Algeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#A0583C] mt-1">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#A0583C]">Phone</h3>
                  <p className="text-gray-700">+213 06 12 34 56 78</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#A0583C] mt-1">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#A0583C]">Email</h3>
                  <p className="text-gray-700">qahwatalasala@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#A0583C] mt-1">
                  <FaClock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#A0583C]">Opening Hours</h3>
                  <p className="text-gray-700">Saturday - Thursday: 7:00 AM - 12:00 PM</p>
                  <p className="text-gray-700">Friday : 8:00 AM - 11:00 AM | 3:30 PM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-[#A0583C] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-[#A0583C] hover:text-[#C08267] transition">
                  <FaFacebook size={28} />
                </a>
                <a href="#" className="text-[#A0583C] hover:text-[#C08267] transition">
                  <FaInstagram size={28} />
                </a>
                <a href="#" className="text-[#A0583C] hover:text-[#C08267] transition">
                  <FaTwitter size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#A0583C] mb-6">Send Us a Message</h2>
            <form name="contact" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-2 border border-[#C08267] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0583C]"
                  required 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-2 border border-[#C08267] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0583C]"
                  required 
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full px-4 py-2 border border-[#C08267] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0583C]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  className="w-full px-4 py-2 border border-[#C08267] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0583C]"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#A0583C] hover:bg-[#C08267] text-white py-3 px-6 rounded-lg transition-colors duration-300 font-medium text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#A0583C] mb-6 border-b-4 border-[#C08267] pb-2 inline-block">
            Find Us
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.6433936841186!2d-0.5873657224228722!3d35.73191068138182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e638dde48a441%3A0xb00441342b88b59b!2sGarden%20Coffee%20Shop!5e1!3m2!1sen!2sdz!4v1750809955387!5m2!1sen!2sdz" 
               width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen="" 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Qahwat Al-Asala Location"></iframe>

          </div>
        </div>
      </div>
</div>
  );
};

export default Infos;
