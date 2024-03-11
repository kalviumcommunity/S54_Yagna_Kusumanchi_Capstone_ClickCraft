import * as React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ParentContext from './context/ParentContext';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Portfolios from './Components/Portfolios/Portfolios';
import Community from './Components/Community/Community';
import YourProfile from './Components/Profile.jsx/YourProfile';


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
          </Routes>
        </BrowserRouter>
        <ParentContext />
      </ParentContext>
    </ChakraProvider>
  )
}

export default App
