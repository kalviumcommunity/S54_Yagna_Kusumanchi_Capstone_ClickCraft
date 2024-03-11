import { Box, Button, Flex, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Portfolio from "../../Assets/portfolio.png"
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const PortfolioCard = () => {
    const BoxStyle = {
        borderTop: '1px solid #664DFF',
        borderBottom: '3px solid #664DFF',
        boxShadow: '0px 0px 15px rgba(102, 77, 255, 0.2)',
        backdropFilter: 'blur(100px)',
        borderRadius: "20"
    }
    const iconHover = {
        transform:"scale(1.1)"
    }
    const [isLiked, setIsLiked] = useState(false)
    return (
        <Box sx={BoxStyle} w="24vw" bg={"#010314"} display={"flex"} justifyContent="center" flexDirection="column" px={4} py={4} color="white">
            <Image src={Portfolio} borderRadius="10px" />
            <Box display="flex" justifyContent="space-around" alignItems="center" w="100%" mt={5}>
                <Button bg="#010314"
                    size="md"
                    color="white"
                    border="3px solid #7241FF"
                    borderRadius="10px"
                    style={{
                        filter: "drop-shadow(0 0 3px rgba(114, 65, 255, 1))",
                        transition: "background-color 0.3s ease",
                    }}
                    _hover={{ bg: "#7241FF" }}
                    px={4}
                >
                    Customize This
                </Button>
                <Box display="flex" justifyContent="space-around" alignItems="center" >
                    <IconButton bg="transparent" color="#e31b23" minW={"25px"} h="25px" _hover={iconHover} m={1} _active={{bg:"#010310"}} onClick={()=>setIsLiked(!isLiked)}>
                        {isLiked? <FaHeart size="20px" />:<FaRegHeart size="20px" /> }
                        
                    </IconButton>
                    <Text fontWeight="500" fontSize="16px">99</Text>
                </Box>
                <Box display="flex" justifyContent="space-around" alignItems="center">
                    <Box m={1}>

                    <IoEyeSharp size="25px"/>
                    </Box>
                    <Text fontWeight="500" fontSize="16px">999</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default PortfolioCard
