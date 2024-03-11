import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import UserImage from "../../Assets/UserImage.png"

const RecentUsers = () => {
    return (
        <Box bg="#010314" display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white">
            <Heading size="xl" textAlign="center" bgGradient='radial(#FFFFFF,#FFFFFF, rgba(255,255,255,0.7), rgba(255,255,255,0.7))' bgClip='text' mt={20}>Recent Users</Heading>
            <Box border="1px solid #2A2B3A" w="80vw" display="flex" justifyContent="center" alignItems="center" mx="auto" mt={5} py={4}>
                <Box w="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Image src={UserImage} border="2px solid #664DFF" borderRadius="50%" w="100px" />
                    <Text fontSize="20px" fontWeight="600" textAlign="center" lineHeight="100%">Yagna Kusumachi</Text>
                </Box>
                <Box w="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Image src={UserImage} border="2px solid #664DFF" borderRadius="50%" w="100px" />
                    <Text fontSize="20px" fontWeight="600" textAlign="center" lineHeight="100%">Yagna Kusumachi</Text>
                </Box>
                <Box w="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Image src={UserImage} border="2px solid #664DFF" borderRadius="50%" w="100px" />
                    <Text fontSize="20px" fontWeight="600" textAlign="center" lineHeight="100%">Yagna Kusumachi</Text>
                </Box>
                <Box w="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Image src={UserImage} border="2px solid #664DFF" borderRadius="50%" w="100px" />
                    <Text fontSize="20px" fontWeight="600" textAlign="center" lineHeight="100%">Yagna Kusumachi</Text>
                </Box>
                <Box w="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Image src={UserImage} border="2px solid #664DFF" borderRadius="50%" w="100px" />
                    <Text fontSize="20px" fontWeight="600" textAlign="center" lineHeight="100%">Yagna Kusumachi</Text>
                </Box>
                <Box w="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Image src={UserImage} border="2px solid #664DFF" borderRadius="50%" w="100px" />
                    <Text fontSize="20px" fontWeight="600" textAlign="center" lineHeight="100%">Yagna Kusumachi</Text>
                </Box>
                <Box w="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Image src={UserImage} border="2px solid #664DFF" borderRadius="50%" w="100px" />
                    <Text fontSize="20px" fontWeight="600" textAlign="center" lineHeight="100%">Yagna Kusumachi</Text>
                </Box>
                <Box w="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Image src={UserImage} border="2px solid #664DFF" borderRadius="50%" w="100px" />
                    <Text fontSize="20px" fontWeight="600" textAlign="center" lineHeight="100%">Yagna Kusumachi</Text>
                </Box>
            </Box>
        </Box>  
    )
}

export default RecentUsers
