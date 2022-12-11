import React from "react";
import "../styles/globals.css";
import MoviesContainer from "./(components)/MoviesContainer";
import Poster from "./(components)/Poster";
function Home() {
  return (
    <div id="test">
      <Poster />
      <MoviesContainer />
    </div>
  );
}

export default Home;
