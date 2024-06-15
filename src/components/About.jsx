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
          Pretty much right out of high school, I impulsively joined the Army. I
          didn’t really know what I was getting into but I knew it was going to
          be an adventure. I ended up deploying twice but it was during my first
          tour in Afghanistan when I found my love for photography. I bought a
          decent camera and started shooting this crazy part of the world where
          I called home for a year. National Geographic shot a documentary
          (Inside The Green Berets) on my camp and ended up using my photos to
          promote their documentary. I was instantly turned on by the thrill of
          telling stories through images. Not to sound cheesy but it’s a pretty
          great feeling when you finally find the one thing you want to do for
          the rest of your life.
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
    <Footer/>
    </>
  );
};

export default About;
