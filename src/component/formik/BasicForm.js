import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"


const formValidationSchema = yup.object({
    email: yup.string()
        .min(5, "Need a longer email")
        .required("Why not fill the email?"),
    password: yup.string()
        .min(8, "Need a longer password")
        .max(12, "Too much password")
        .required("Why not fill the password?")
        .matches(/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password pattern doesnt match")
    // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@_#$/&*!]).{8, 12}$/


})

function BasicForm() {
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("onSubmit", values)
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type="email" placeholder="Email" name="email" value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                <br />
                <input type="password" placeholder="Password" name="password" value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default BasicForm