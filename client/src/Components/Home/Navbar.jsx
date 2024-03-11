import {
    Box,
    Flex,
    HStack,
    Button,
    Text,
    Link,
    Stack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Avatar
} from '@chakra-ui/react';

import { Link as Ln } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/ParentContext';



export default function Navbar({ tab }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { loginWithRedirect, isAuthenticated, user, logout } = useContext(AppContext)
    const navLinks = [
        { name: 'Home', path: '/', status: tab == "Home" },
        { name: 'Portfolios', path: '/portfolios', status: tab == "Portfolios" },
        { name: 'Community', path: '/community', status: tab == "Community" },
    ]

    useEffect(() => {
        // console.log(user, isAuthenticated)
    }, [user, isAuthenticated])

    return (
        <Box px={4} bg='#010314' mt={3}>
            <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
                <Flex color="white" fontWeight={700} fontSize="1.5em" gap={2}>
                    <Text >CLICK</Text>
                    <Text color='#7241FF'>CRAFT</Text>
                </Flex>


                <HStack spacing={8} alignItems="center">
                    <HStack as="nav" spacing={6} d={{ base: 'none', md: 'flex' }} alignItems="center">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} onClose={onClose} status={link.status} />
                        ))}
                    </HStack>
                </HStack>
                {isAuthenticated ?

                    <Box display={"flex"} gap={4} alignItems="center">
                        <Ln to={"/profile"}>
                            <Avatar
                                as={Link}
                                border="3px solid #7241FF"
                                rounded="full"
                                src={user.picture}
                            />
                        </Ln>

                        <Button bg="#010314"
                            size="md"
                            color="white"
                            border="3px solid #2A2B3A"
                            borderRadius="20px"
                            _hover={{
                                bg: "#7241FF", border: "3px solid #7241FF", filter: "drop-shadow(0 0 5px rgba(114, 65, 255, 1))",
                                transition: "background-color 0.3s ease"
                            }}
                            d={{ base: 'none', md: 'block' }}
                            px={8}
                            onClick={logout}
                        >
                            Log out
                        </Button>
                    </Box> :
                    <Box display={"flex"} gap={4}>
                        <Button bg="#010314"
                            size="md"
                            color="white"
                            border="3px solid #2A2B3A"
                            borderRadius="20px"
                            _hover={{
                                bg: "#7241FF", border: "3px solid #7241FF", filter: "drop-shadow(0 0 5px rgba(114, 65, 255, 1))",
                                transition: "background-color 0.3s ease"
                            }}
                            d={{ base: 'none', md: 'block' }}
                            px={8}
                            onClick={() => loginWithRedirect()}
                        >
                            Sign in
                        </Button>
                        <Button bg="#010314"
                            size="md"
                            color="white"
                            border="3px solid #7241FF"
                            borderRadius="20px"
                            style={{
                                filter: "drop-shadow(0 0 5px rgba(114, 65, 255, 1))",
                                transition: "background-color 0.3s ease",
                            }}
                            _hover={{ bg: "#7241FF" }}
                            d={{ base: 'none', md: 'block' }}
                            px={8}
                            onClick={() => loginWithRedirect()}
                        >
                            Sign Up
                        </Button>

                    </Box>
                }
                <IconButton
                    size="md"
                    icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    aria-label="Open Menu"
                    display="none"
                    d={{ base: 'inherit', md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
            </Flex>

            {isOpen ? (
                <Box pb={4} d={{ base: 'inherit', md: 'none' }}>
                    <Stack as="nav" spacing={2}>
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} onClose={onClose} />
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}

const NavLink = ({ name, path, onClose, status }) => {
    return (
        <Ln to={path}>
            <Link
                lineHeight="inherit"
                _hover={{
                    textDecoration: 'none',
                    color: "#865BFF",
                    transform: 'scale(1.05)',
                    fontWeight: "700",
                    transition: "color 0.3s ease"
                }}
                onClick={() => onClose()}
                color={status ? "#865BFF" : "#77798F"}
                fontWeight={status ? "700" : "400"}
                fontSize={"1.2em"}
            >

                {name}
            </Link>
        </Ln>

    );
}