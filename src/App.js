import { useState } from "react"
import { AddColor } from "./AddColor";
import "./App.css";
import { Counter } from "./Counter";
import { Routes, Route, Link } from "react-router-dom"

const INITIAL_MOVIE_LIST = [
  {
    name: "Brigerton",
    poster: "http://image.tmdb.org/t/p/original//luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
    rating: 4,
    trailer: "https://youtu.be/gpv7ayf_tyE",
    summary: "Bridgerton follows Daphne Bridgerton (Phoebe Dynevor), the eldest daughter of the powerful Bridgerton family as she makes her debut onto Regency London's competitive marriage market. Hoping to follow in her parent's footsteps and find Link match sparked by true love, Daphne's prospects initially seem to be unrivaled.",
    cast: {
      actor: "Nicola Coughlan",
      actress: "Claudia Jessie"
    },
    duration: "60min"
  },
  {
    name: "Lucifer",
    poster: "http://image.tmdb.org/t/p/original//ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    rating: 4.7,
    trailer: "https://youtu.be/X4bF_quwNtw",
    summary: "Lucifer Morningstar (Tom Ellis) is the devil. He's tired of Hell and takes Link break in L.A. He's running his nightclub Lux with demon disciple Mazikeen (Lesley-Ann Brandt). His brother Amenadiel (D.B. Woodside) demands that he returns to Hell.",
    cast: {
      actor: "Tom Ellis",
      actress: "Lauren German"
    },
    duration: "100min"
  },
  {
    name: "Brigerton",
    poster: "http://image.tmdb.org/t/p/original//luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
    rating: 5,
    trailer: "https://youtu.be/gpv7ayf_tyE",
    summary: "Bridgerton follows Daphne Bridgerton (Phoebe Dynevor), the eldest daughter of the powerful Bridgerton family as she makes her debut onto Regency London's competitive marriage market. Hoping to follow in her parent's footsteps and find Link match sparked by true love, Daphne's prospects initially seem to be unrivaled.",
    cast: {
      actor: "Nicola Coughlan",
      actress: "Claudia Jessie"
    },
    duration: "60min"
  },
  {
    name: "Lucifer",
    poster: "http://image.tmdb.org/t/p/original//ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    rating: 3.5,
    trailer: "https://youtu.be/X4bF_quwNtw",
    summary: "Lucifer Morningstar (Tom Ellis) is the devil. He's tired of Hell and takes Link break in L.A. He's running his nightclub Lux with demon disciple Mazikeen (Lesley-Ann Brandt). His brother Amenadiel (D.B. Woodside) demands that he returns to Hell.",
    cast: {
      actor: "Tom Ellis",
      actress: "Lauren German"
    },
    duration: "100min"
  },
  {
    name: "Brigerton",
    poster: "http://image.tmdb.org/t/p/original//luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
    rating: 4.6,
    trailer: "https://youtu.be/gpv7ayf_tyE",
    summary: "Bridgerton follows Daphne Bridgerton (Phoebe Dynevor), the eldest daughter of the powerful Bridgerton family as she makes her debut onto Regency London's competitive marriage market. Hoping to follow in her parent's footsteps and find Link match sparked by true love, Daphne's prospects initially seem to be unrivaled.",
    cast: {
      actor: "Nicola Coughlan",
      actress: "Claudia Jessie"
    },
    duration: "60min"
  },
  {
    name: "Lucifer",
    poster: "http://image.tmdb.org/t/p/original//ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    rating: 4,
    trailer: "https://youtu.be/X4bF_quwNtw",
    summary: "Lucifer Morningstar (Tom Ellis) is the devil. He's tired of Hell and takes Link break in L.A. He's running his nightclub Lux with demon disciple Mazikeen (Lesley-Ann Brandt). His brother Amenadiel (D.B. Woodside) demands that he returns to Hell.",
    cast: {
      actor: "Tom Ellis",
      actress: "Lauren German"
    },
    duration: "100min"
  }

]


export default function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          {/* Link change page without refresh */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">MovieList</Link></li>
          <li><Link to="/add-color">AddColor</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/add-color" element={<AddColor />} />
      </Routes>
    </div>
  );
  //JSX ends
}


function Home() {
  return (
    <h1>Welcome to Netflix App</h1>
  )
}

function MovieList() {
  const movieList = INITIAL_MOVIE_LIST
  return (
    <div className="movie-list">
      {movieList.map((mv) => (
        <Movie movie={mv} />
      ))}
    </div>
  )
}


function Movie({ movie }) {
  console.log(movie.poster)

  const [show, setShow] = useState(true)

  const ratingStyles = {
    color: movie.rating <= 4.5 ? "red" : "green"
  }

  const summaryStyle = {
    display: show ? "block" : "none"
  }
  return (
    <div className="movie-card">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-spec">
        <h2>{movie.name}</h2>
        <h3 style={ratingStyles}>⭐{movie.rating}</h3>
      </div>
      <button onClick={() => setShow(!show)} >Toggle description</button>
      {/* <p style={summaryStyle} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      <div className="movie-footer">
        <Counter />
        <button className="movie-button">Watch Now</button>
      </div>
    </div>
  )
}

