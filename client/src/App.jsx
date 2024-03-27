import { useState } from 'react'
import {BrowserRouter , Navigate, Routes,Route} from "react-router-dom"
import HomePage from './scenes/homePage/HomePage'
import Navbar from './scenes/navbar/Navbar'
import LoginPage from './scenes/loginPage/LoginPage'
import  ProfilePage from './scenes/profilePage/ProfilePage'
// import Widgets from 'scenes/widgets/Widgets'
import {useMemo} from "react"
import {  useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import { themeSettings } from './theme'
function App() {
  
const mode= useSelector((state)=> state.mode);
const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);

  return (
    <div>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile/:userId" element={<ProfilePage/>}/>
        
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default App
