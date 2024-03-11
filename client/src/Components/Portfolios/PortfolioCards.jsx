import { Box } from '@chakra-ui/react'
import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioCards = () => {
  return (
    <Box w="80vw" display="flex" justifyContent="center" alignItems="center" gap={10} flexWrap="wrap" mx="auto" my={10}>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
    </Box>
  )
}

export default PortfolioCards
