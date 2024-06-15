import React from "react";
import artistImage from "../assets/artist.jpg";
import { Link } from "react-router-dom";

const Artist = () => {
  return (
    <div className="container text-white md:mt-24 mt-10 mx-auto p-6">
      <div className="flex flex-wrap md:ml-32 md:flex-nowrap items-center justify-between">
        <div className="md:w-1/2 md:-mt-6 w-full p-4">
          <h2 className="text-lg text-center font-normal tracking-wider mb-4">
            MEET THE ARTIST
          </h2>
          <h3 className="text-2xl text-center tracking-wider font-semibold mb-2">
            DEEPAK KUMAR
          </h3>
          <p className="text-lg tracking-wider font-normal text-center mb-2">
            Photographer
          </p>
          <p className="text-md tracking-normal text-center mb-4">
            Deepak is an Indian photographer whose art is inspired by nature.
          </p>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="text-lg text-center font-normal my-2 tracking-wider px-6 py-2 border border-gray-200 rounded-lg hover:bg-zinc-800 transition-colors duration-200"
              rel="noopener noreferrer"
            >
              Know More...
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full p-4">
          <img
            src={artistImage}
            alt="Deepak Kumar"
            className="w-full h-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Artist;
