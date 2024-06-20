import { Movie } from "./Movie";
import { INITIAL_MOVIE_LIST } from "../App";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from "../global";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import axios from "axios"

export function MovieList() {

  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate()

  const getMovies = async () => {
    try {
      const response = await axios.get(`${API}`, {
        method: "GET"
      })
      console.log(response.data)
      setMovieList(response.data)
    } catch (error) {
      console.error("Error listing movies", error)
    }
  }



  // const getMovies = () => {
  //   fetch(`${API}`, {
  //     method: "GET"
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setMovieList(data))
  // }

  useEffect(() => getMovies(), [])//call only once

  console.log(movieList)

  return (
    <div>

      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={mv.id} movie={mv} id={mv.id}
            deleteButton={
              <IconButton aria-label="delete" color="error"
                onClick={() => {
                  fetch(`${API}/${mv.id}`, {
                    method: "DELETE"
                  }).then(() => getMovies())
                }}>
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton aria-label="edit" color="secondary"
                onClick={() => {
                  navigate(`/movies/edit/${mv.id}`)
                }}>
                <EditIcon />
              </IconButton>
            }

          />
        ))}
      </div>
    </div>
  );
}
