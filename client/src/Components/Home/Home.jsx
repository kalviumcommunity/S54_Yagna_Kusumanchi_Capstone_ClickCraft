import React from 'react'
import Navbar from './Navbar'
import img from '../../Assets/bg.png'
import { Image } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <Image src={img} h="auto" maxW={'100%'} mx={"auto"}/> */}
    </div>
  )
}

export default Home
