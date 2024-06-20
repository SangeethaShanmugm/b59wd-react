import React from 'react'
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from '../global';
import { useNavigate } from 'react-router-dom';

function AddMovie({ movieList, setMovieList }) {


    const [name, setName] = useState("Gravity")
    const [poster, setPoster] = useState("https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg")
    const [rating, setRating] = useState(5)
    const [summary, setSummary] = useState("Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney)")
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
            {/* copy movieList and add newMovie */}


            {/* Task -> 20 mins */}




            <Button variant="contained" onClick={() => {
                const newMovie = {
                    name,
                    poster,
                    rating,
                    summary
                }

                fetch(`${API}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newMovie)
                })
                    // setMovieList([...movieList, newMovie])
                    .then((res) => res.json())
                    .then(() => navigate("/movies"))
            }}>Add Movie</Button>

        </div>
    )
}

export default AddMovie