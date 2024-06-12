import { Movie } from "./Movie";
import { INITIAL_MOVIE_LIST } from "../App";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function MovieList({ movieList, setMovieList }) {

  return (
    <div>

      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
