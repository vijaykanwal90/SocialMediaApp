import React , {useState} from 'react'
import {
    Box ,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme


} from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOUtlined"
import {Formik} from "formik"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'
import { UseDispatch, useDispatch } from 'react-redux';
import {setLogin} from"../../app/store"
import Dropzone from "react-dropzone"
import FlexBetween from '../../components/FlexBetween'

const registerSchema= yup.object().shape({
    firstName:yup.string().required("required"),
    lastName:yup.string().required("required"),
    email:yup.string().email("invalid email").required("required"),
    password:yup.string().equired("required"),
    location:yup.string().required("required"),
    occupation:yup.string().required("required"),
    picture:yup.string().required("required"),
})

const loginSchema= yup.object().shape({
    email:yup.string().email("invalid email").required("required"),
    password:yup.string().equired("required"),

})
const initialValuesRegister = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    location:"",
    occupation:"",
    picture:"",

}
const initiValuesLogin= {
    email:"",
    password:"",
};
const Form = () => {

    const [pageType,setPageType]= useState("login")
    const {palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isNonMobile = useMediaQuery("(min-width:600px")
    const isLogin = pageType==="login";
    const isRegister = pageType ==="register";
    const handleFormSubmit = async(values,onsubmitProps)=>{};

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={isLogin?initiValuesLogin:initialValuesRegister}
    validationSchema={isLogin ?loginSchema :registerSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      })=>{
            <form onSubmit={handleSubmit}>
                <box display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4,minmax(0,1fr))">
                    
                </box>
            </form>
      }}
    </Formik>
  )
}

export default Form
