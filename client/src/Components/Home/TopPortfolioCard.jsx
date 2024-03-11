import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import star from "../../Assets/star.png"
import portfolio from "../../Assets/portfolio.png"
import { ExternalLinkIcon } from '@chakra-ui/icons'



const TopPortfolioCard = () => {

    const [ on, setOn ] = useState(false)

    const display = ()=>{
        setOn(!on)
    }

    const BoxStyle = {
        borderTop: '1px solid #664DFF',
        borderBottom: '3px solid #664DFF',
        boxShadow: '0px 0px 25px rgba(102, 77, 255, 0.2)',
        backdropFilter: 'blur(100px)',
        borderRadius: "20"
    }

    return (
        <Box sx={BoxStyle} w="35vw" bg={"#010314"} display={"flex"} justifyContent="center" flexDirection="column" px={10} py={15}>
            <Flex gap={2} alignItems={"center"} mb={2} mt={10}>
                <Image src={star} />
                <Text letterSpacing={4} bgGradient='linear(to-br, #627FFF, #865BFF)' bgClip='text' fontSize="12px" fontWeight="700">How To Start</Text>
            </Flex>
            <Heading size="xl" bgGradient='radial(#FFFFFF,#FFFFFF, rgba(255,255,255,0.7), rgba(255,255,255,0.7))' bgClip='text'>Customize This Template</Heading>
            <Text color="#77798F" mt={5} maxW="600px" fontSize="1.4em">Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</Text>
            <Box position={"relative"} mt={20} mb={5}>
                <Image src={portfolio} borderRadius={10} boxShadow='0px 0px 100px rgba(102, 77, 255, 0.2)' backdropBlur='blur(264)' cursor="pointer" _hover={{ transform: "scale(1.01)" }} onMouseEnter={display}/>
                {on &&
                <Box border="1px solid #2A2B3A" borderRadius="10" bgGradient="linear(to-b, #010310, rgba(102, 51, 238, 0.4))" w="100%" h={"100%"} position={"absolute"} top={0} display="flex" alignItems="center" justifyContent="center" onMouseLeave={display} >
                    <Box display={"flex"} justifyContent="center" alignItems="center" flexDirection="column" gap={4}>
                        <Button bg="#010314"
                            size="md"
                            color="white"
                            border="3px solid #2A2B3A"
                            borderRadius="10px"
                            _hover={{
                                bg: "#7241FF", border: "3px solid #7241FF", filter: "drop-shadow(0 0 5px rgba(114, 65, 255, 1))",
                                transition: "background-color 0.3s ease"
                            }}
                            d={{ base: 'none', md: 'block' }}
                            px={8}
                        >
                            Preview <ExternalLinkIcon ml={2} />
                        </Button>
                        <Button bg="#010314"
                            size="md"
                            color="white"
                            border="3px solid #7241FF"
                            borderRadius="10px"
                            style={{
                                filter: "drop-shadow(0 0 5px rgba(114, 65, 255, 1))",
                                transition: "background-color 0.3s ease",
                            }}
                            _hover={{ bg: "#7241FF" }}
                            d={{ base: 'none', md: 'block' }}
                            px={8}
                        >
                            Customize
                        </Button>

                    </Box>
                </Box>}
            </Box>
        </Box>
    )
}

export default TopPortfolioCard
