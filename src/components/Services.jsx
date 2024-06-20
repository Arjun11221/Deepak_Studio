import React from "react";
import { SERVICES } from "../utils/constant";
import Friend from "./Friend";
import Footer from "./Footer";

const Services = () => {
  const phoneNumber = "+918851814279";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div>
      <h2 className="md:text-5xl mt-16 text-3xl text-center font-normal tracking-widest mb-6">
        OUR SERVICES
      </h2>
      {SERVICES.map((service) => (
        <div className="flex md:mt-24 flex-col md:flex-row justify-between items-start p-4">

          <div className="w-full ml-2 md:w-1/4 p-2 flex justify-center">
            <img
              src={service.image1}
              alt="About"
              className="md:w-full w-64 h-auto object-cover"
            />
          </div>

          <div className="w-full md:mt-32 text-center md:w-1/4 p-2">
            <h2 className="text-base font-semibold tracking-widest mb-6">
              {service.title}
            </h2>
            <p className="text-lg leading-6">{service.description}</p>
            <div className="mt-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                to="/contact"
                className="text-lg text-center font-normal tracking-wider px-6 py-2 border border-gray-200 rounded-lg hover:bg-zinc-800 transition-colors duration-200"
              >
                Booking Now
              </a>
            </div>
          </div>

          <div className="w-full hidden md:w-1/4 p-2 md:flex justify-center">
            <img
              src={service.image2}
              alt="About"
              className="md:w-full w-64 h-auto object-cover"
            />
          </div>
        </div>
      ))}
      <Friend />
      <hr className="md:mt-40 mt-24 " />
      <Footer />
    </div>
  );
};

export default Services;
