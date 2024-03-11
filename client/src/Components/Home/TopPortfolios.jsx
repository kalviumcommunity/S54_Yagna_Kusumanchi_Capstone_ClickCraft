import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import TopPortfolioCard from './TopPortfolioCard'

const TopPortfolios = () => {
    return (
        <>
            <Box bg="#010314" display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white" >
                <Heading size="xl" textAlign="center" bgGradient='radial(#FFFFFF,#FFFFFF, rgba(255,255,255,0.7), rgba(255,255,255,0.7))' bgClip='text' my={20}>Top Rated Portfolios</Heading>
                <Box display={"flex"} justifyContent="space-between" w="80vw" flexWrap="wrap" gap={10}>
                    
                <TopPortfolioCard/>
                <TopPortfolioCard/>
                <TopPortfolioCard/>
                <TopPortfolioCard/>
                </Box>
            </Box>
        </>
    )
}

export default TopPortfolios
