import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor)=>{
    const list = actor.movies.map((movie)=><li key={movie}>{movie}</li>)
    return(
      <div key={actor.name}>
        <h2>Name:{actor.name}</h2>
        <p>Movies:</p>
        <ul>{list}</ul>
      </div>
    )
  })

  return(
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
