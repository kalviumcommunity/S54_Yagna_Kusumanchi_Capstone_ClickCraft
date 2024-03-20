import { Box, Button, IconButton, Image, Text, } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import PortfolioCard from '../Portfolios/PortfolioCard'
import YourPortfolios from '../Profile.jsx/YourPortfolios'
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const ProfileMain = ({ userProfile }) => {
    const BoxStyle = {
        border: '2px solid #664DFF',
        borderBottom: '3px solid #664DFF',
        boxShadow: '0px 0px 100px rgba(102, 77, 255, 0.2)',
        backdropFilter: 'blur(264px)',
        borderRadius: "20"
    }
    const [isLiked, setIsLiked] = useState(false)

    return (
        <Box bg="#010310" mt="150px" color="white">
            <Box sx={BoxStyle} w="80vw" bg={"#010314"} display={"flex"} justifyContent="center" alignItems="center" my={10} mx="auto" flexDirection={"column"}>
                <Image src={userProfile?.picture} border="4px solid #664DFF" borderRadius="50%" w={"150px"} mt="-75px" />
                <Text fontWeight="bold" fontSize="34">{userProfile?.name}</Text>
                <Box bg="#010314" cursor={'pointer'} onClick={()=>setIsLiked(!isLiked)} position="absolute" top={5} right={5} color="red">
                    {isLiked ? <FaHeart size="30px" /> : <FaRegHeart size="30px" />}
                </Box>
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
                    <Text color="#77798F" my={4}>{userProfile?.profile?.about}</Text>
                    <Text fontWeight="medium" fontSize="24">My Portfolios</Text>
                    <Box display="flex" justifyContent="left" alignItems="center" gap={10} columnGap={20} flexWrap="wrap" mx="auto" my={10}>
                        {
                            userProfile?.portfolios?.map((Data, i) => {
                                return <YourPortfolios Data={Data} key={i} />
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileMain
