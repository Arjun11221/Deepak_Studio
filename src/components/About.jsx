import React, { useEffect } from "react";
import artist from "../assets/artist.jpg";
import { Link } from "react-router-dom";
import Best from "./Best";
import Friend from "./Friend";
import Footer from "./Footer";

const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

  return (
    <>
    <div className="flex md:mt-20 flex-col md:flex-row justify-between items-start p-4">
      {/* First Section */}
      <div className="w-full md:w-1/4 p-2">
        <h2 className="md:text-8xl text-4xl text-center md:mt-16 font-normal md:ml-16 mb-4">
          HOW <br /> I <br /> GOT <br /> INTO <br /> THIS...
        </h2>
      </div>

      {/* Second Section */}
      <div className="w-full md:w-1/4 p-2 flex justify-center">
        <img src={artist} alt="About" className="md:w-full w-64 h-auto object-cover" />
      </div>

      {/* Third Section */}
      <div className="w-full text-center md:w-1/4 p-2">
        <h1 className="my-10 md:text-4xl text-2xl font-semibold ">Hey, I'm Deepak!</h1>
        <p className="text-lg leading-6">
          Hello, everyone! I’m Deepak, a passionate photographer with over 5 years of experience capturing unforgettable moments. My journey has taken me across India, where I’ve shot weddings, engagements, and birthday celebrations in the beautiful landscapes of Uttarakhand, the vibrant culture of Punjab, the bustling streets of Delhi, and the glamorous city of Mumbai. My work blends artistry with technical expertise, creating stunning visuals that tell unique stories. my goal is to tell a story through my photographs that resonates with my clients and their loved ones. Discovering my diverse experiences and the emotions I’ve captured through my lens will surely leave you amazed!
        </p>
        <div className="mt-10" >
        <Link
          to="/contact"
          className="text-lg text-center font-normal tracking-wider px-6 py-2 border border-gray-200 rounded-lg hover:bg-zinc-800 transition-colors duration-200"
        >Let's Connect</Link>
        </div>
        
      </div>
      
    </div>
    <Best/>
    <Friend/>
    <hr className="md:mt-36 mt-28 "  />
    <Footer/>
    </>
  );
};

export default About;
