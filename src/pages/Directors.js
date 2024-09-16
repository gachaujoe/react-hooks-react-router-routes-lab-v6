import { useEffect, useState } from "react";

function Directors() {

  const directors = [
    {
      name: "Scott Derrickson",
      movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
    },
    {
      name: "Mike Mitchell",
      movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
    },
    {
      name: "Edward Zwick",
      movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
    },
  ];

  return (
    <>
      <h1>Directors Page</h1>
      <div>
        <ul>
          {directors?.map(director => (
            <li key={director.name}>
              {director.name}
              <ul>
                {director.movies.map(movie => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Director info here! */}
      </main>
    </>
  );
};

export default Directors;

// src/pages/Directors.js