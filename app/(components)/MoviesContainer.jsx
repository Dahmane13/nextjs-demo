import React from "react";
import MovieCard from "./MovieCard";
const getMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=15d7a80a7c308b752bb115e6b0ff1757",
    { cache: "force-cache" }
  );

  const data = res.json();
  console.log(data);
  return data;
};
async function MoviesContainer() {
  const data = await getMovies();

  return (
    <div className="  top-[-7rem] w-3/4 bg-[#EEEEEE] left-0 right-0 my-0 mx-auto p-10 grid grid-cols-4fr gap-x-4 gap-y-6">
      {data["results"].slice(0, 6).map((item) => (
        <MovieCard
          key={item.id}
          rank={item.vote_average}
          image={"https://image.tmdb.org/t/p/original" + item.poster_path}
          title={item.title}
          genres={item.genre_ids}
        />
      ))}
    </div>
  );
}

export default MoviesContainer;
