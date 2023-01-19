import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((director)=>{
    const list = director.movies.map((movie)=><li key={movie}>{movie}</li>)
    return(
      <div key={director.name}>
        <h2>Name:{director.name}</h2>
        <p>Movies:</p>
        <ul>{list}</ul>
      </div>
    )
  })

  return(
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors;
