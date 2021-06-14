import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
//loop through movies array of obj from api, where for every current object, render a movie component (html structure) and pass the propert names for each object. The movie component instance will render the html structure (jsx) of movie component. And it will pass these props data for it to be dispplayed to DOM.
