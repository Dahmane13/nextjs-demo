import React from "react";
import "../styles/globals.css";
import MoviesContainer from "./(components)/MoviesContainer";
import Poster from "./(components)/Poster";
const getMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=15d7a80a7c308b752bb115e6b0ff1757",
    { cache: "force-cache" }
  );

  const data = res.json();
  console.log(data);
  return data;
};

async function Home() {
  const data = await getMovies();
  return (
    <div id="test">
      <Poster />
      <MoviesContainer data={data} limit={6} />
    </div>
  );
}

export default Home;
