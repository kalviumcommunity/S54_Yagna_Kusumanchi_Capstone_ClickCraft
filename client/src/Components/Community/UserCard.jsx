import {
    Container,
    Box,
    chakra,
    Flex,
    Text,
    Stack,
    Avatar,
    SimpleGrid,
    useColorModeValue,
    IconButton
} from '@chakra-ui/react';

import Yagna from "../../Assets/Yagna.jpg"
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { useState } from 'react';


const obj =
{
    name: 'Yagna Kusumanchi',
    image: Yagna,
    content: `Author of "Python 3.0 for Beginners" and a Full Stack Developer passionate about creating dynamic and user-friendly web experiences.`
}



const UserCard = () => {
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
                    {obj.content}
                </Text>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Text>Portfolios: <span style={{ fontWeight: "bold" }}>10</span></Text>
                    <Box display="flex" justifyContent="space-between" gap={2}>
                        <Box display="flex" justifyContent="space-around" alignItems="center" >
                            <IconButton bg="transparent" color="#e31b23" minW={"25px"} h="25px" _hover={iconHover} m={1} _active={{ bg: "#010310" }} onClick={() => setIsLiked(!isLiked)}>
                                {isLiked ? <FaHeart size="20px" /> : <FaRegHeart size="20px" />}

                            </IconButton>
                            <Text fontWeight="500" fontSize="16px">99</Text>
                        </Box>
                        <Box display="flex" justifyContent="space-around" alignItems="center">
                            <Box m={2}>

                                <IoEyeSharp size="25px" />
                            </Box>
                            <Text fontWeight="500" fontSize="16px">999</Text>
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
            >
                <Avatar
                    size="lg"
                    showBorder={true}
                    borderColor="#664DFF"
                    name="avatar"
                    src={obj.image}
                />
                <Box textAlign="center">
                    <Text fontWeight="600" fontSize="md" w={"120px"}>
                        {obj.name}
                    </Text>
                </Box>
            </Stack>
        </Stack>
    );
};

export default UserCard;