import React from "react";
import extra1 from "../../assets/banner/extra2.jpg";


const ExtraSection1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between  py-8 sm:py-12 md:py-16 lg:py-20 shadow-md bg-no-repeat">
      {/* Left-side (Image) */}
      <div className="w-full md:w-1/2 mx-auto md:mx-0 mb-8 md:mb-0">
        <img
          src={extra1}
          alt="Library Books"
          className="w-full rounded-lg shadow-lg transition duration-300  transform hover:scale-110 "
        />
      </div>

      {/* Right-side (Text) */}
      <div className="w-full md:w-1/2 px-6 md:px-12">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          Library books play a pivotal role in society by providing access to
          knowledge, fostering literacy, and promoting lifelong learning.
          Libraries serve as community hubs where individuals of all ages can
          explore diverse topics through a vast collection of books, ranging
          from classic literature to contemporary research. Beyond books,
          libraries offer essential resources such as internet access,
          educational programs, and cultural events, contributing to community
          development and social inclusion. By preserving and disseminating
          knowledge, library books not only enrich individual lives but also
          empower communities to thrive in an ever-changing world.
        </p>
      </div>
    </div>
  );
};

export default ExtraSection1;