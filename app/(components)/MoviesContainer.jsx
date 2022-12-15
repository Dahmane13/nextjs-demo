import Link from "next/link";
import React from "react";
import MovieCard from "./MovieCard";

function MoviesContainer({ data, limit }) {
  return (
    <div className="  top-[-7rem] w-3/4 bg-[#EEEEEE] left-0 right-0 my-0 mx-auto p-10 grid grid-cols-4fr gap-x-4 gap-y-6">
      {data["results"].slice(0, limit).map((item) => (
        <Link href={`movies/${item.id}`}>
          <MovieCard
            key={item.id}
            rank={item.vote_average}
            image={"https://image.tmdb.org/t/p/original" + item.poster_path}
            title={item.title || item.name}
            genres={item.genre_ids}
          />
        </Link>
      ))}
    </div>
  );
}

export default MoviesContainer;
