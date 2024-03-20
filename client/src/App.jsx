import * as React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ParentContext from './context/ParentContext';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Portfolios from './Components/Portfolios/Portfolios';
import Community from './Components/Community/Community';
import YourProfile from './Components/Profile.jsx/YourProfile';
import UpdateProfile from './Components/Profile.jsx/UpdateProfile';
import Profile from './Components/Community/Profile';
import NotLoggedIn from './Components/Home/NotLoggedIn';


function App() {
  return (

    <ChakraProvider>
      <ParentContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/portfolios' element={<Portfolios/>} />
            <Route path='/community' element={<Community/>} />
            <Route path='/profile' element={<YourProfile/>} />
            <Route path='/update' element={<UpdateProfile/>} />
            <Route path='/user' element={<Profile/>} />
          </Routes>
        </BrowserRouter>
        <ParentContext />
      </ParentContext>
    </ChakraProvider>
  )
}

export default App
