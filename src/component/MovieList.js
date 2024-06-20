import { Movie } from "./Movie";
import { INITIAL_MOVIE_LIST } from "../App";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from "../global";


export function MovieList() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`${API}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => setMovieList(data))
  }, [])//call only once

  console.log(movieList)

  return (
    <div>

      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={mv.id} movie={mv} id={mv.id} />
        ))}
      </div>
    </div>
  );
}
