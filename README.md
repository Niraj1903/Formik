1. npm i formik to install the formik in the project
2. import {useFormik } from "Formik"

const formik = useFormik({
initalValues : {
name : "",
email : ""
}
})

input onChange = {formik.handleChange} value = {formik.values.name} name ="name" />
input onChange = {formik.handleChange} value = {formik.values.email} email : "email" />
