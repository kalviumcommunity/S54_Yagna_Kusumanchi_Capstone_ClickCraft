import {
    Box,
    Text,
    Stack,
    Avatar,
    IconButton,
} from '@chakra-ui/react';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    const iconHover = {
        transform: "scale(1.1)"
    }
    const [isLiked, setIsLiked] = useState(false)

    return (

        <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={2}
            mb={5}
            justifyContent="center"
            color="white"
        >
            <Stack
                maxW="345px"
                boxShadow="lg"
                rounded="md"
                border="1px solid #664DFF"
                p={6}
                pb={3}
                pos="relative"
                bg={"#010310"}
                mr={5}
                _after={{
                    content: `""`,
                    w: '0',
                    h: '0',
                    borderColor: `transparent #664DFF transparent`,
                    borderStyle: 'solid',
                    borderWidth: '20px 0 20px 20px',
                    position: 'absolute',
                    top: { base: 'unset', sm: '45%' },
                    right: { base: 'unset', sm: '-25px' },
                    left: { base: '48%', sm: 'unset' },
                    bottom: { base: '-15px', sm: 'unset' },
                    transform: { base: 'rotate(90deg)', sm: 'unset' },
                    display: 'block'
                }}
            >
                <Text fontWeight="400" fontSize="16px" color="#77798F">
                    {user.bio}
                </Text>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Text>Portfolios: <span style={{ fontWeight: "bold" }}>{user.portfolios.length}</span></Text>
                    <Box display="flex" justifyContent="space-between" gap={2}>
                        <Box display="flex" justifyContent="space-around" alignItems="center" >
                            <IconButton bg="transparent" color="#e31b23" minW={"25px"} h="25px" _hover={iconHover} m={1} _active={{ bg: "#010310" }} onClick={() => setIsLiked(!isLiked)}>
                                {isLiked ? <FaHeart size="20px" /> : <FaRegHeart size="20px" />}

                            </IconButton>
                            <Text fontWeight="500" fontSize="16px">{user.likes}</Text>
                        </Box>
                        <Box display="flex" justifyContent="space-around" alignItems="center">
                            <Box m={2}>

                                <IoEyeSharp size="25px" />
                            </Box>
                            <Text fontWeight="500" fontSize="16px">{user.views}</Text>
                        </Box>
                    </Box>

                </Box>
            </Stack>
            <Stack
                direction="column"
                spacing={2}
                p={2}
                justifyContent="flex-end"
                alignItems="center"
                as={Link}
                to={`/user/?id=${user.UserId}`}
                cursor={'pointer'}
            >
                <Avatar
                    size="lg"
                    showBorder={true}
                    borderColor="#664DFF"
                    name="avatar"
                    src={user.picture}
                />
                <Box textAlign="center">
                    <Text fontWeight="600" fontSize="md" w={"120px"}>
                        {user.name}
                    </Text>
                </Box>
            </Stack>
        </Stack>
    );
};

export default UserCard;