import { useState } from "react";
import { Counter } from "../Counter";
import { useNavigate } from "react-router-dom"

export function Movie({ movie, id }) {

  const [show, setShow] = useState(true);
  const navigate = useNavigate()
  const ratingStyles = {
    color: movie.rating <= 4.5 ? "red" : "green"
  };

  const summaryStyle = {
    display: show ? "block" : "none"
  };
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-spec">
        <h2>{movie.name} - {id}</h2>
        <h3 style={ratingStyles}>⭐{movie.rating}</h3>
      </div>
      <button onClick={() => setShow(!show)}>Toggle description</button>


      <button onClick={() => navigate("/movies/" + id)} >Info</button>


      {/* <p style={summaryStyle} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      <div className="movie-footer">
        <Counter />
        <button className="movie-button">Watch Now</button>
      </div>
    </div>
  );
}
