import React from 'react'
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material"
import { Box , Typography,Divider,userTheme } from '@mui/material';
import UserImage from '../../components/UserImage';
import FlexBetween from '../../components/FlexBetween';
import WidgetWrapper from '../../components/WidgetWrapper';
import { UseSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserWidgets = () => {
  const [user, setUser] = useState(null)
  const {palette} = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state)=>state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.main;
  const main = palette.neutral.main;
  

  const getUser = async ()=>{
    const response = await fetch(`http://localhost:8000/users/${userId}`,{
    method:"GET",
    headers:{Authrization:`Bearer ${token}`}
   } )
   const data = await response.json();
   setUser(data); };

   useEffect(()=>{
getUser();
   },[])
   if(!user){
    return null
   }
   const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impression,
    friends
   } = user;
  return (
    <WidgetWrapper>
      <FlexBetween>
        
      </FlexBetween>
    </WidgetWrapper>
  )
}

export default UserWidgets
