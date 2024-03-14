import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import UserImage from "../../Assets/UserImage.png"
import { AppContext } from '../../context/ParentContext'

const RecentUsers = () => {
    const { users } = useContext(AppContext)
    const [recentUsers, setRecentUsers] = useState([])
    useEffect(() => {
        setRecentUsers(users.slice(0,8))
    }, [users])
    return (
        <Box bg="#010314" display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white">
            <Heading size="xl" textAlign="center" bgGradient='radial(#FFFFFF,#FFFFFF, rgba(255,255,255,0.7), rgba(255,255,255,0.7))' bgClip='text' mt={20}>Recent Users</Heading>
            <Box border="1px solid #2A2B3A" w="80vw" display="flex" justifyContent="center" alignItems="start" mx="auto" mt={5} py={4}>
                {

                    recentUsers.reverse().map((user, i) => {
                        return <Box key={i} w="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Image src={user?.picture} border="2px solid #664DFF" borderRadius="50%" w="75px" height="75px" />
                            <Text fontSize="18px" fontWeight="600" textAlign="center" lineHeight="100%">{user?.name}</Text>
                        </Box>
                    })
                }
            </Box>
        </Box>
    )
}

export default RecentUsers
