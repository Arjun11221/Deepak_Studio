import React from "react";
import { BEST } from "../utils/constant";

const Best = () => {
  return (
    <div className="md:mt-32 mt-20">
      <h2 className="md:text-5xl text-3xl text-center font-normal tracking-widest mb-6">
        WHAT I DO BEST
      </h2>

      <div className="grid grid-cols-1 md:ml-24 ml-7 md:mt-20 mt-16 md:grid-cols-3 gap-8 md:gap-x-96 md:gap-y-20 w-full max-w-5xl px-4">
        {BEST.map((item) => (
          <div key={item.id} className="relative">
            <div className="h-96 w-96">
              <img
                src={item.image}
                alt="Background"
                className="md:w-full w-72 h-full object-cover"
              />
            </div>
            <div className="md:w-96 -ml-6 mt-4 md:text-center">
              <p className="md:text-base text-sm font-normal  p-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best;
