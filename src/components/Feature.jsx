import React from "react";
import { DATA } from "../utils/constant";

const Feature = () => {
  return (
    <div className="text-white flex flex-col items-center -mt-20 md:mt-24">
      <h2 className="text-sm font-normal tracking-widest mb-6">FEATURED </h2>
      <h2 className="md:text-5xl text-3xl text-center font-normal tracking-normal mb-24">Blog Posts</h2>
      <div className="grid grid-cols-1 md:-ml-80 md:grid-cols-3 gap-8 md:gap-x-96 md:gap-y-20 w-full max-w-5xl px-4">
        {DATA.map((item, index) => (
          <div key={item.id} className="relative h-96 w-96">
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full bg-opacity-50">
              <div className="text-center text-white">
                <h1 className="text-sm font-normal tracking-widest mt-60 my-6">
                  {item.title}
                </h1>
                <p className="text-lg font-normal mb-8">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
