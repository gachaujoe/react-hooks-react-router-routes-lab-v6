import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const directors = [
  {
    id:1,
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    id:2,
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    id:3,
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

function Movie() {
  const {id} = useParams()
  return (
    <>
      {id&&(
        <MovieCard title={directors[0].movies[0]}/>
      )}
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Movie info here! */}
      </main>
    </>
  );
};

export default Movie;




