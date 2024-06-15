import React from "react";
import { BiPhone } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-5 p-8 lg:p-20 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">About</h3>
          <p className="text-base">
            Wholesale distributor and trader of high-quality scrap materials,
            including Millberry Copper Wire Scrap, High Purity Copper Cathode,
            Copper Wire Scrap, Aluminium 6063 Scrap, Aluminium Wheel Scrap,
            Insulated Copper Wire Scrap, and Tungsten Scrap. Import and export
            services available.
          </p>
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:ml-16">
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
          <p className="text-base flex items-center">
            <MdLocationOn className="mr-2" /> G-1098 Rampark Ext Loni Gzb
          </p>
          <p className="text-base mt-4 flex items-center">
            <MdEmail className="mr-2" /> deepakkumar2482000@gmail.com
          </p>
          <p className="text-base mt-4 flex items-center">
            <BiPhone className="mr-2" /> +91 8851814279
          </p>
        </div>
        <div className="w-full lg:w-1/3 lg:ml-10">
          <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
          <form className="flex flex-col lg:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white border-2 border-gray-600 px-2 py-2 rounded-t lg:rounded-t-none lg:rounded-l focus:outline-none mb-2 lg:mb-0"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-b lg:rounded-b-none lg:rounded-r"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 lg:mt-20 pt-4 text-center">
        <p>Made by Arjun with ❤️ in India </p>
      </div>
    </footer>
  );
};

export default Footer;
