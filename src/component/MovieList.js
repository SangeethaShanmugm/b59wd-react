import { Movie } from "./Movie";
import { INITIAL_MOVIE_LIST } from "../App";
import { useState } from "react";
import TextField from '@mui/material/TextField';

export function MovieList() {
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

  const [name, setName] = useState("Gravity")
  const [poster, setPoster] = useState("https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg")
  const [rating, setRating] = useState(5)
  const [summary, setSummary] = useState("Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney)")

  return (
    <div>
      <div className="add-movie-form">
        <TextField id="name" label="Name" variant="outlined" value={name}
          onChange={(event) => setName(event.target.value)}
        />


        <input type="text" value={name}
          onChange={(event) => setName(event.target.value)} placeholder="Enter name" />
        <input type="text" value={poster}
          onChange={(event) => setPoster(event.target.value)} placeholder="Enter poster" />
        <input type="text" value={rating}
          onChange={(event) => setRating(event.target.value)} placeholder="Enter rating" />
        <input type="text" value={summary}
          onChange={(event) => setSummary(event.target.value)} placeholder="Enter summary" />
        {/* copy movieList and add newMovie */}

        <button
          onClick={() => {
            const newMovie = {
              name,
              poster,
              rating,
              summary
            }
            setMovieList([...movieList, newMovie])
          }
          }
        >Add Movie</button>



      </div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
