import * as React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ParentContext from './context/ParentContext';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';


function App() {
  return (

    <ChakraProvider>
      <ParentContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </BrowserRouter>
        <ParentContext />
      </ParentContext>
    </ChakraProvider>
  )
}

export default App
