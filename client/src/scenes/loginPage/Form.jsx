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
import { UseDispatch } from 'react-redux';
import {setLogin} from"../../app/store"
import Dropzone from "react-dropzone"
import FlexBetween from '../../components/FlexBetween'

const registerSchema= yup.object().shape({
    firstName:
    lastName:
    email:
    password:
    location:
    occupation:
    picture:
})
const Form = () => {
  return (
    <div>
      
    </div>
  )
}

export default Form
