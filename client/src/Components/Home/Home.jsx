import React from 'react'
import Navbar from './Navbar'
import img from '../../Assets/bg.png'
import { Image } from '@chakra-ui/react'
import HeroContent from './HeroContent'
import Setupbox from './Setupbox'
import TopPortfolios from './TopPortfolios'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroContent/>
      <Image src={img} h="auto" maxW={'100%'} mx={"auto"}/>
      <Setupbox/>
      <TopPortfolios/>
    </div>
  )
}

export default Home
