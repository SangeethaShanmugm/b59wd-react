import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "../global";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const moviesValidationSchema = yup.object({
    name: yup
        .string()
        .min(5, "Need a longer name")
        .required("Why not fill the name?"),
    poster: yup
        .string()
        .min(20, "Need a longer poster")
        .max(200, "Too much poster")
        .required("Why not fill the poster?"),
    rating: yup
        .number()
        .min(1, "Need a higher rating")
        .max(10, "Too much rating")
        .required("Why not fill rating"),
    summary: yup
        .string()
        .min(10, "Need longer summary")
        .required("Why not fill summary"),
});

function AddMovie() {
    const formik = useFormik({
        initialValues: {
            name: "Gravity",
            poster:
                "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg",
            rating: "5",
            summary:
                "Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney)",
        },
        validationSchema: moviesValidationSchema,
        onSubmit: (newMovie) => {
            console.log("onSubmit", newMovie);
            createMovies(newMovie);
        },
    });

    // const [name, setName] = useState("Gravity")
    // const [poster, setPoster] = useState("https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg")
    // const [rating, setRating] = useState(5)
    // const [summary, setSummary] = useState("Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney)")
    const navigate = useNavigate();

    const createMovies = (newMovie) => {
        console.log("newMovie", newMovie);

        fetch(`${API}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMovie),
        })
            // setMovieList([...movieList, newMovie])
            .then((res) => res.json())
            .then(() => navigate("/movies"));

    };

    return (
        <form className="add-movie-form" onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                // value={name}
                // onChange={(event) => setName(event.target.value)}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

            <TextField
                id="poster"
                label="Poster"
                variant="outlined"
                name="poster"
                value={formik.values.poster}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}

            <TextField
                id="rating"
                label="Rating"
                variant="outlined"
                name="rating"
                value={formik.values.rating}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}

            <TextField
                id="summary"
                label="Summary"
                variant="outlined"
                name="summary"
                value={formik.values.summary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}

            {/* copy movieList and add newMovie */}

            {/* Task -> 20 mins */}

            <Button
                type="submit"
                variant="contained"
                onClick={createMovies}
            // onClick={() => {
            //     const newMovie = {
            //         name,
            //         poster,
            //         rating,
            //         summary,
            //     };

            //     fetch(`${API}`, {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify(newMovie),
            //     })
            //         // setMovieList([...movieList, newMovie])
            //         .then((res) => res.json())
            //         .then(() => navigate("/movies"));
            // }}
            >
                Add Movie
            </Button>
        </form>
    );
}

export default AddMovie;
