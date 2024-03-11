import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import UserCard from './UserCard'

const Community = () => {
    return (
        <Box bg="#010310">
            <Navbar tab={"Community"} />
            <Heading size="xl" textAlign="center" bgGradient='radial(#FFFFFF,#FFFFFF, rgba(255,255,255,0.7), rgba(255,255,255,0.7))' bgClip='text' mt={10}>Community</Heading>
            <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" mx="auto" my={10} gap={10}>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </Box>
            <Footer />
        </Box>
    )
}

export default Community
