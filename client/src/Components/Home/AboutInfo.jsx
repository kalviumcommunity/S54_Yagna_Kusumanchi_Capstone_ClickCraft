import { Box, Button, Divider, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import star from "../../Assets/star.png"
import Contact from "../../Assets/Contact.png"
import Yagna from "../../Assets/Yagna.jpg"
import React, { useContext } from 'react'
import { FaGithub, FaLinkedin, FaAmazon, FaInstagram } from "react-icons/fa";

const AboutInfo = () => {


    const BoxStyle = {
        borderTop: '1px solid #664DFF',
        borderBottom: '3px solid #664DFF',
        boxShadow: '0px 0px 100px rgba(102, 77, 255, 0.2)',
        backdropFilter: 'blur(264px)',
        borderRadius: "42"
    };
    const iconHover = {
        bg:"#010310",
        color:"#7241FF",
        transform:"scale(1.3)"
    }

    return <>
        <Box bg="#010314" display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white" >
            <Box sx={BoxStyle} w="80vw" bg={"#010314"} display={"flex"} justifyContent="spaceBetween" alignItems="center" my={10}>
                <Box mx={10} mr={20}>
                    <Heading size="xl" bgGradient='radial(#FFFFFF,#FFFFFF, rgba(255,255,255,0.7), rgba(255,255,255,0.7))' bgClip='text'>Always Reachable</Heading>
                    <Text color="#77798F" mt={5} maxW="600px" fontSize="1.4em">Feel free to reach out to us anytime through email or LinkedIn. We're here to assist you and answer any queries you may have. Let's stay connected!</Text>
                    <Box my={5} bg="#182542" h="1px"></Box>
                    <Box display="flex" gap={6} alignItems="center">
                        <Image src={Yagna} w="75px" border="3px solid #182542" borderRadius="50%"/>
                        <Box display="flex" flexDirection="column" justifyContent="space-between">
                            <Text fontWeight="500" fontSize="29px">Yagna Kusumanchi</Text>
                            <Text fontSize="16px" color="#77798F">Founder and CEO of Click Craft</Text>
                            <Box display="flex" alignItems="center">
                                <IconButton bg="#010310" color="white" minW={"25px"} h="35px" _hover={iconHover} ><FaGithub size="20px"/></IconButton>
                                <IconButton bg="#010310" color="white" minW={"35px"} h="35px" _hover={iconHover}><FaLinkedin size="20px"/></IconButton>
                                <IconButton bg="#010310" color="white" minW={"35px"} h="35px" _hover={iconHover}><FaAmazon size="20px"/></IconButton>
                                <IconButton bg="#010310" color="white" minW={"35px"} h="35px" _hover={iconHover}><FaInstagram size="20px"/></IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box m={10}>
                    <Image src={Contact} />
                </Box>
            </Box>
        </Box>
    </>
}

export default AboutInfo
