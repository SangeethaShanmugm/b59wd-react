import React from 'react'
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from '../global';
import { useNavigate, useParams } from 'react-router-dom';

export function EditMovie() {
    const { movieid } = useParams()

    const [movie, setMovie] = useState("");

    useEffect(() => {
        fetch(`${API}/${movieid}`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => setMovie(data))
    }, [])//call only once

    console.log(movie)
    return movie ? <EditMovieForm movie={movie} /> : "Loading..."

}

function EditMovieForm({ movie }) {

    const [name, setName] = useState(movie.name)
    const [poster, setPoster] = useState(movie.poster)
    const [rating, setRating] = useState(movie.rating)
    const [summary, setSummary] = useState(movie.summary)
    const navigate = useNavigate()

    return (
        <div className="add-movie-form">
            <TextField id="name" label="Name" variant="outlined" value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <TextField id="poster" label="Poster" variant="outlined" value={poster}
                onChange={(event) => setPoster(event.target.value)}
            />
            <TextField id="rating" label="Rating" variant="outlined" value={rating}
                onChange={(event) => setRating(event.target.value)}
            />
            <TextField id="name" label="Name" variant="outlined" value={summary}
                onChange={(event) => setSummary(event.target.value)}
            />

            <Button variant="contained" color="success" onClick={() => {
                const updateMovie = {
                    name,
                    poster,
                    rating,
                    summary
                }

                fetch(`${API}/${movie.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updateMovie)
                })
                    // setMovieList([...movieList, newMovie])
                    .then((res) => res.json())
                    .then(() => navigate("/movies"))
            }}>SAVE</Button>

        </div>
    )
}