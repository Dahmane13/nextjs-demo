"use client";
import React from "react";
import MovieShortDesc from "./MovieShortDesc";

function MoviePoster({
  image,
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
    <div
      id="poster"
      style={{ backgroundImage: `url(${image})` }}
      className={`relative w-full h-screen   bg-cover border-b-4 border-t-4 border-[#E3A61C]`}
    >
      <div className="absolute top-[calc(100vh-18rem)] left-24 flex flex-col gap-2">
        <MovieShortDesc
          poster={poster}
          title={title}
          runtime={runtime}
          year={year}
          rating={rating}
          voters={voters}
          tagline={tagline}
          genres={genres}
        />
      </div>
    </div>
  );
}

export default MoviePoster;
