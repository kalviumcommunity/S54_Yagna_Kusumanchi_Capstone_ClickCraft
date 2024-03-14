import { Box, Button, Image, Text, useConst } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import Yagna from "../../Assets/Yagna.jpg"
import PortfolioCard from '../Portfolios/PortfolioCard'
import { AppContext } from '../../context/ParentContext'

const YourProfileMain = () => {
  const BoxStyle = {
    border: '2px solid #664DFF',
    borderBottom: '3px solid #664DFF',
    boxShadow: '0px 0px 100px rgba(102, 77, 255, 0.2)',
    backdropFilter: 'blur(264px)',
    borderRadius: "20"
  }

  const {userProfile, setUserProfile} = useContext(AppContext)

  return (
    <Box bg="#010310" mt="150px" color="white">
      <Box sx={BoxStyle} w="80vw" bg={"#010314"} display={"flex"} justifyContent="center" alignItems="center" my={10} mx="auto" flexDirection={"column"}>
        <Image src={userProfile?.picture} border="4px solid #664DFF" borderRadius="50%" w={"150px"} mt="-75px" />
        <Text fontWeight="bold" fontSize="34">{userProfile?.name}</Text>
        <Button bg="#010314" size="md" color="white" border="3px solid #7241FF" borderRadius="10px" px={8} position="absolute" top={5} right={5}
          style={{
            filter: "drop-shadow(0 0 5px rgba(114, 65, 255, 1))",
            transition: "background-color 0.3s ease",
          }}
          _hover={{ bg: "#7241FF" }}>
          Edit Profile
        </Button>
        <Box display="flex" justifyContent="center" alignItems="center" textAlign="center">
          <Box my={10} px={10} borderRight="2px solid white">
            <Text fontSize="32" fontWeight="bold">{userProfile?.views}</Text>
            <Text fontSize="24">Views</Text>
          </Box>
          <Box my={10} px={10}>
            <Text fontSize="32" fontWeight="bold">{userProfile?.likes}</Text>
            <Text fontSize="24">Likes</Text>
          </Box>
        </Box>
        <Box w="80%" textAlign="justify">

          <Text fontWeight="medium" fontSize="24">About</Text>
          <Text color="#77798F" my={4}>{userProfile?.about}</Text>
          <Text fontWeight="medium" fontSize="24">My Portfolios</Text>
          <Box display="flex" justifyContent="space-around" alignItems="center" gap={10} flexWrap="wrap" mx="auto" my={10}>
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            {/* <PortfolioCard /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default YourProfileMain
