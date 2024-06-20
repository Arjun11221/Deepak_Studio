import React from "react";
import { BiPhone } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-5 p-8 lg:p-20 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-3xl font-semibold mb-4">About</h3>
          <p className="text-base">
            A passionate photographer with over 5 years of experience. I’ve shot
            weddings, engagements, and birthday celebrations in Uttarakhand,
            Punjab, Delhi, and Mumbai. My dedication to capturing unique moments
            has taken me across India, creating stunning visuals and
            unforgettable memories.
          </p>
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:ml-16">
          <h3 className="text-3xl font-semibold mb-6">Contact Info</h3>
          <p className="text-base flex items-center">
            <MdLocationOn className="mr-1 text-2xl " /> G-1098 Rampark Ext Loni Gzb
          </p>
          <p className="text-base mt-4 flex items-center">
            <MdEmail className="mr-2 text-xl" /> deepakkumar2482000@gmail.com
          </p>
          <p className="text-base mt-4 flex items-center">
            <BiPhone className="mr-2 text-xl" /> +91 8851814279
          </p>
        </div>
        <div className="w-full  lg:w-1/3 lg:ml-10">
          <h3 className="text-3xl font-semibold mb-6">Stay Connected</h3>
         
          <div className="flex gap-5" >
          <FaInstagram className="text-3xl cursor-pointer " />
          
          <FaFacebook className="text-3xl cursor-pointer "  />

          <FaYoutube className="text-4xl -mt-1 cursor-pointer" />

          <FaTwitter className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 lg:mt-20 pt-4 text-center">
        <p>Made by Arjun with ❤️ in India </p>
      </div>
    </footer>
  );
};

export default Footer;
