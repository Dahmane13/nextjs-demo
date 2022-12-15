"use client";
import React, { useEffect, useState } from "react";
import MoviePoster from "../../(components)/MoviePoster";

function MovieDetail({ params }) {
  console.log(params);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const getMovie = async (id) => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=15d7a80a7c308b752bb115e6b0ff1757&language=en-US`
      );

      const data = await res.json();
      console.log(res);
      setMovie(data);
    };
    getMovie();
  }, [params.id]);
  console.log(movie);
  return (
    <div>
      {movie ? (
        <MoviePoster
          image={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
        />
      ) : (
        <div className=" w.full h-screen flex justify-center items-center">
          <img src="/loading.gif" className=" w-56" />
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
