import React from "react";

function Poster() {
  return (
    <div
      id="poster"
      className="relative w-full h-screen  bg-[url('/poster.jpg')] bg-cover border-b-4 border-t-4 border-[#E3A61C] "
    >
      <div className="absolute top-1/2 left-1/3 flex flex-col gap-2">
        <h1 className=" text-5xl font-bold text-white">
          Lord of the rings : rings of power
        </h1>
        <ul className="flex text-white">
          <li>Adventure</li>-<li>Drama</li>-<li>Fantasy</li>
        </ul>
        <button className="px-4 py-2 bg-[#E3A61C] rounded-full text-white cursor-pointer max-w-fit">
          watch trailer
        </button>
      </div>
    </div>
  );
}

export default Poster;
