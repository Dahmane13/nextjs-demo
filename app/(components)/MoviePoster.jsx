"use client";
import React from "react";

function MoviePoster({ image }) {
  return (
    <div
      id="poster"
      style={{ backgroundImage: `url(${image})` }}
      className={`relative w-full h-screen   bg-cover border-b-4 border-t-4 border-[#E3A61C]`}
    >
      <div className="absolute top-1/2 left-1/3 flex flex-col gap-2"></div>
    </div>
  );
}

export default MoviePoster;
