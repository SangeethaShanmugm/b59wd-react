import { useState } from "react";
import { Counter } from "../Counter";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function Movie({ movie, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const ratingStyles = {
    color: movie.rating <= 4.5 ? "red" : "green",
  };

  const summaryStyle = {
    display: show ? "block" : "none",
  };
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-spec">
        <h2>
          {movie.name} - {id}
        </h2>
        <h3 style={ratingStyles}>⭐{movie.rating}</h3>
      </div>

      <IconButton
        color="primary"
        aria-label="toggleBtn"
        onClick={() => setShow(!show)}
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      <IconButton
        color="primary"
        aria-label="infoBtn"
        onClick={() => navigate(`/movies/${id}`)}
      >
        <InfoIcon />
      </IconButton>

      {/* <p style={summaryStyle} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      <div className="movie-footer">
        <Counter />
        {deleteButton} {editButton}
        <button className="movie-button">Watch Now</button>
      </div>
    </div>
  );
}
