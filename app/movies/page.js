import React from "react";
import MoviesContainer from "../(components)/MoviesContainer";
const getMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=15d7a80a7c308b752bb115e6b0ff1757",
    { cache: "no-store" }
  );

  const data = res.json();
  console.log(data);
  return data;
};
async function Contact() {
  const data = await getMovies();
  return (
    <div>
      <h1 className="w-3/4 left-0 right-0 my-0 mx-auto pl-10 mt-10 text-2xl uppercase">
        Trending Movies
      </h1>
      <MoviesContainer data={data} limit={12} />
    </div>
  );
}

export default Contact;
