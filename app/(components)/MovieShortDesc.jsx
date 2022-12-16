"use client";
import Image from "next/image";
import React from "react";

function MovieShortDesc({
  poster,
  title,
  runtime,
  year,
  rating,
  voters,
  tagline,
  genres,
}) {
  return (
    <div className="flex gap-2 text-white w-fit text-xl">
      <Image src={poster} width={250} height={350} quality={75} />
      <div className="flex flex-col gap-0.5">
        <span>{year}</span>
        <span className=" text-4xl font-medium">{title}</span>
        <span className="flex gap-1 items-center">
          <img src="/timer.svg" className=" w-6 h-6" /> {runtime}
        </span>
        <div className="flex gap-1 items-center">
          <div className=" p-1 bg-[#E3A61C] w-fit text-black">
            <span>{rating}</span>
          </div>
          <span>{voters} voters</span>
        </div>
        <ul className="flex gap-1">
          {genres.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
        <span>{tagline}</span>
      </div>
    </div>
  );
}

export default MovieShortDesc;
