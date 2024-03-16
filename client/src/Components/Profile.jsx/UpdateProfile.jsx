import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Box,
    Stack,
    Heading,
    Text,
    Textarea,
} from '@chakra-ui/react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import { useContext } from 'react'
import { AppContext } from '../../context/ParentContext'
import axios from 'axios'

import { useNavigate } from "react-router-dom";


export default function UpdateProfile() {
    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm()

    const { user, setUserProfile, userProfile } = useContext(AppContext)
    const navigate = useNavigate();

    function onSubmit(data) {
        return new Promise((resolve) => {
            setTimeout(async () => {
                try {
                    const response = await axios.put('http://localhost:3001/user/updateprofile', {
                        email: user.email,
                        name:data.name,
                        profile: {
                            name: data.name,
                            firstName: data.name.split(' ')[0],
                            lastName: data.name.split(' ')[1],
                            location: data.location,
                            education: data.education,
                            educationInstitution: data.educationInstitution,
                            activities: data.activities,
                            quote: data.quote,
                            githubUserName: data.githubUserName,
                            programmingLanguages: data.programmingLanguages.split(','),
                            fieldOfInterest: data.fieldOfInterest.split(','),
                            passion: data.passion.split(','),
                            jobTitles: data.jobTitles.split(','),
                            currPosition: data.currPosition,
                            socialLinks: {
                                github: data.github,
                                twitter: data.twitter,
                                linkedin: data.linkedin,
                                instagram: data.instagram
                            },
                            projects: [
                                {
                                    title: data.title,
                                    imgLink: data.imgLink,
                                    description: data.description,
                                    ghLink: data.ghLink,
                                    demoLink: data.demoLink
                                }
                            ]
                        }
                    });

                    console.log(response.data);
                    setUserProfile(response.data)
                    navigate("/profile");
                    
                } catch (error) {
                    console.error('Error updating profile:', error);
                    alert('Failed to update profile!');
                }
                resolve()
            }, 3000)
        })
    }

    return (
        <Box bg="#010314" color="white" >
            <Navbar />

            <Box w={"80%"} mx={"auto"}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box display="flex" justifyContent="right" alignItems="right" flexDirection="column">

                        <Stack w="100%" spacing={3} mt={10} columnGap={20} direction={{ base: 'column', md: 'row' }}>
                            <FormControl>
                                <FormLabel htmlFor='name'>Name</FormLabel>
                                <Input id='name' placeholder='Name' {...register('name')} />
                            </FormControl>

                            <FormControl>
                                <FormLabel htmlFor='location'>Location</FormLabel>
                                <Input id='location' placeholder='Location' {...register('location')} />
                            </FormControl>
                        </Stack>

                        <Stack w="100%" spacing={3} mt={10} columnGap={20} direction={{ base: 'column', md: 'row' }}>
                            <FormControl>
                                <FormLabel htmlFor='education'>Education</FormLabel>
                                <Input id='education' placeholder='Education' {...register('education')} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='educationInstitution'>Education Institution</FormLabel>
                                <Input id='educationInstitution' placeholder='Education Institution' {...register('educationInstitution')} />
                            </FormControl>
                        </Stack>

                        <Stack w="100%" spacing={3} mt={10} columnGap={20} direction={{ base: 'column', md: 'row' }}>
                            <FormControl>
                                <FormLabel htmlFor='activities'>Hobbies</FormLabel>
                                <Input id='activities' placeholder='Hobbies' {...register('activities')} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='quote'>Quote</FormLabel>
                                <Input id='quote' placeholder='Quote' {...register('quote')} />
                            </FormControl>
                        </Stack>

                        <Stack w="100%" spacing={3} mt={10} columnGap={20} direction={{ base: 'column', md: 'row' }} >
                            <FormControl>
                                <FormLabel htmlFor='githubUserName'>Github Username</FormLabel>
                                <Input id='githubUserName' placeholder='Github Username' {...register('githubUserName')} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='programmingLanguages'>Programming Languages</FormLabel>
                                <Input id='programmingLanguages' placeholder='Enter with comma separated' {...register('programmingLanguages')} />
                            </FormControl>
                        </Stack>
                        <Stack w="100%" spacing={3} mt={10} columnGap={20} direction={{ base: 'column', md: 'row' }} >
                            <FormControl>
                                <FormLabel htmlFor='fieldOfInterest'>field Of Interest</FormLabel>
                                <Input id='fieldOfInterest' placeholder='Enter with comma separated' {...register('fieldOfInterest')} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='passion'>passion</FormLabel>
                                <Input id='passion' placeholder='Enter with comma separated' {...register('passion')} />
                            </FormControl>
                        </Stack>
                        <Stack w="100%" spacing={3} mt={10} columnGap={20} direction={{ base: 'column', md: 'row' }} >
                            <FormControl>
                                <FormLabel htmlFor='jobTitles'>jobTitles</FormLabel>
                                <Input id='jobTitles' placeholder='Enter with comma separated' {...register('jobTitles')} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='currPosition'>Your Current Position</FormLabel>
                                <Input id='currPosition' placeholder='Your Current Position' {...register('currPosition')} />
                            </FormControl>
                        </Stack>

                        <Text mt={10} fontSize={24} fontWeight={"medium"}>Social Media Links</Text>

                        <Stack w="100%" spacing={3} mt={5} columnGap={20} direction={{ base: 'column', md: 'row' }} >
                            <FormControl>
                                <FormLabel htmlFor='github'>Git Hub</FormLabel>
                                <Input id='github' placeholder='Git hub Profile Link' {...register('github')} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='twitter'>Twitter</FormLabel>
                                <Input id='twitter' placeholder='Twitter Link' {...register('twitter')} />
                            </FormControl>
                        </Stack>
                        <Stack w="100%" spacing={3} mt={5} columnGap={20} direction={{ base: 'column', md: 'row' }} >
                            <FormControl>
                                <FormLabel htmlFor='linkedin'>LinkedIn</FormLabel>
                                <Input id='linkedin' placeholder='LinkedIn Profile Link' {...register('linkedin')} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='instagram'>Instagram</FormLabel>
                                <Input id='instagram' placeholder='Instagram Profile Link' {...register('instagram')} />
                            </FormControl>
                        </Stack>

                        <Text mt={10} fontSize={24} fontWeight={"medium"}>Your Projects</Text>

                        <Stack w="100%" spacing={3} mt={5} columnGap={20} direction={{ base: 'column', md: 'row' }} >
                            <FormControl>
                                <FormLabel htmlFor='title'>Title</FormLabel>
                                <Input id='title' placeholder='Project Title' {...register('title')} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='imgLink'>Image Link</FormLabel>
                                <Input id='imgLink' placeholder='Paste Your Project Preview Image Link' {...register('imgLink')} />
                            </FormControl>
                        </Stack>
                        <Stack w="100%" spacing={3} mt={5} columnGap={20} direction={{ base: 'column', md: 'row' }} >

                            <FormControl>
                                <FormLabel htmlFor='description'>Description</FormLabel>
                                <Textarea id='description' placeholder='Project Description' {...register('description')} />
                            </FormControl>
                        </Stack>
                        <Stack w="100%" spacing={3} mt={5} columnGap={20} direction={{ base: 'column', md: 'row' }} >
                            <FormControl>
                                <FormLabel htmlFor='ghLink'>Github Link</FormLabel>
                                <Input id='ghLink' placeholder='Paste Your Github Project Link' {...register('ghLink')} />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='demoLink'>Deployed Link</FormLabel>
                                <Input id='demoLink' placeholder='Paste Your Deployed Link' {...register('demoLink')} />
                            </FormControl>
                        </Stack>

                        <Button mx={"auto"} my={5} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                            Confirm
                        </Button>
                    </Box>
                </form>
            </Box>
            <Footer />
        </Box>

    )
}