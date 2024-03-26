import { useState } from 'react'
import {BrowserRouter , Navigate, Routes,Route} from "react-router-dom"
import HomePage from 'scenes/homePage/HomePage'
import Navbar from 'scenes/navbar/Navbar'
import LoginPage from 'scenes/loginPage/LoginPage'
import  ProfilePage from 'scenes/profilePage'
import Widgets from 'scenes/widgets/Widgets'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile/:userId" element={<ProfilePage/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
