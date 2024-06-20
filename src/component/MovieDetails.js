import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { API } from "../global";


export function MovieDetails() {
  const { movieid } = useParams();
  const navigate = useNavigate()

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${API}/${movieid}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [])//call only once


  // const movie = movieList[movieid]
  // console.log(movie)


  return (
    <div className="movie-detail-card">
      {/* <iframe width="100% " height="430px " src={movie.trailer} title="Bridgerton | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

      <div className="movie-spec">
        <h2>
          {movie.name}
        </h2>
        <h3>⭐{movie.rating}</h3>
      </div>

      <p className="movie-summary">{movie.summary}</p>

      <Button variant="contained" startIcon={<UndoIcon />} onClick={() => navigate(-1)}>
        BACK
      </Button>


    </div>
  );
}
