import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/ParentContext";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const UpdateProfile = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  const { user, setUserProfile, userProfile, isAuthenticated } =
    useContext(AppContext);

  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(userProfile?.picture);

  if (!isAuthenticated) {
    return <div>Please Register Your Account or Login to your account</div>;
  }

  const onSubmit = async (data) => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset", "demo-app");
        formData.append("cloud_name", "dyobwlkps");

        const cloudinaryResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/dyobwlkps/image/upload`,
          formData
        );

        var profilePictureUrl = cloudinaryResponse.data.secure_url;
        setProfilePicture(profilePictureUrl);
      }

      const response = await axios.put(
        "http://localhost:3001/user/updateprofile",
        {
          email: user.email,
          name: data.name,
          picture: profilePictureUrl,
          profile: {
            name: data.name,
            firstName: data.name.split(" ")[0],
            lastName: data.name.split(" ")[1],
            location: data.location,
            education: data.education,
            educationInstitution: data.educationInstitution,
            quote: data.quote,
            githubUserName: data.githubUserName,
            programmingLanguages: data.programmingLanguages.split(","),
            jobTitles: data.jobTitles.split(","),
            currPosition: data.currPosition,
            about: data.about,
            shortBio: data.shortBio,
            socialLinks: {
              github: data.github,
              twitter: data.twitter,
              linkedin: data.linkedin,
              instagram: data.instagram,
            },
            projects: [
              {
                title: data.title,
                imgLink: data.imgLink,
                description: data.description,
                ghLink: data.ghLink,
                demoLink: data.demoLink,
              },
            ],
          },
        }
      );

      setUserProfile(response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile!");
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    if (event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setProfilePicture(imageUrl);
    }
  };

  return (
    <Box bg="#010314" color="white">
      <Navbar />

      <Box w={"80%"} mx={"auto"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            display="flex"
            justifyContent="right"
            alignItems="right"
            flexDirection="column"
          >
            <Stack
              w="100%"
              spacing={3}
              mt={10}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="profilePicture">Profile Picture</FormLabel>
                <Box display="flex" alignItems="center">
                  <Image src={profilePicture} width={200} h={200} />
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Box>
              </FormControl>
            </Stack>

            <Stack
              w="100%"
              spacing={3}
              mt={10}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  placeholder="Name"
                  defaultValue={userProfile?.name}
                  {...register("name")}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Input
                  id="location"
                  placeholder="Location"
                  defaultValue={userProfile?.profile?.location}
                  {...register("location")}
                />
              </FormControl>
            </Stack>

            <Stack
              w="100%"
              spacing={3}
              mt={10}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="education">Education</FormLabel>
                <Input
                  id="education"
                  placeholder="Education"
                  defaultValue={userProfile?.profile?.education}
                  {...register("education")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="educationInstitution">
                  Education Institution
                </FormLabel>
                <Input
                  id="educationInstitution"
                  placeholder="Education Institution"
                  defaultValue={userProfile?.profile?.educationInstitution}
                  {...register("educationInstitution")}
                />
              </FormControl>
            </Stack>

            <Stack
              w="100%"
              spacing={3}
              mt={5}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="shortBio">Short Bio</FormLabel>
                <Textarea
                  id="shortBio"
                  placeholder="Enter a Short bio"
                  defaultValue={userProfile?.profile?.shortBio}
                  {...register("shortBio")}
                />
              </FormControl>
            </Stack>

            <Stack
              w="100%"
              spacing={3}
              mt={5}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="about">About You</FormLabel>
                <Textarea
                  id="about"
                  placeholder="Tell about Yourself"
                  defaultValue={userProfile?.profile?.about}
                  {...register("about")}
                  size={"auto"}
                />
              </FormControl>
            </Stack>

            <Stack
              w="100%"
              spacing={3}
              mt={10}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="quote">Quote</FormLabel>
                <Input
                  id="quote"
                  placeholder="Quote"
                  defaultValue={userProfile?.profile?.quote}
                  {...register("quote")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="fav">Favicon</FormLabel>
                <Input
                  id="favicon"
                  placeholder="Paste Your website icon link"
                  defaultValue={userProfile?.profile?.favicon}
                  {...register("favicon")}
                />
              </FormControl>
            </Stack>

            <Stack
              w="100%"
              spacing={3}
              mt={10}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="githubUserName">Github Username</FormLabel>
                <Input
                  id="githubUserName"
                  placeholder="Github Username"
                  defaultValue={userProfile?.profile?.githubUserName}
                  {...register("githubUserName")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="programmingLanguages">
                  Programming Languages
                </FormLabel>
                <Input
                  id="programmingLanguages"
                  placeholder="Enter with comma separated"
                  defaultValue={userProfile?.profile?.programmingLanguages}
                  {...register("programmingLanguages")}
                />
              </FormControl>
            </Stack>
            <Stack
              w="100%"
              spacing={3}
              mt={10}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="jobTitles">jobTitles</FormLabel>
                <Input
                  id="jobTitles"
                  placeholder="Enter with comma separated"
                  defaultValue={userProfile?.profile?.jobTitles}
                  {...register("jobTitles")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="currPosition">
                  Your Current Position
                </FormLabel>
                <Input
                  id="currPosition"
                  placeholder="Your Current Position"
                  defaultValue={userProfile?.profile?.currPosition}
                  {...register("currPosition")}
                />
              </FormControl>
            </Stack>

            <Text mt={10} fontSize={24} fontWeight={"medium"}>
              Social Media Links
            </Text>

            <Stack
              w="100%"
              spacing={3}
              mt={5}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="github">Git Hub</FormLabel>
                <Input
                  id="github"
                  placeholder="Git hub Profile Link"
                  defaultValue={userProfile?.profile?.socialLinks?.github}
                  {...register("github")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="twitter">Twitter</FormLabel>
                <Input
                  id="twitter"
                  placeholder="Twitter Profile Link"
                  defaultValue={userProfile?.profile?.socialLinks?.twitter}
                  {...register("twitter")}
                />
              </FormControl>
            </Stack>

            <Stack
              w="100%"
              spacing={3}
              mt={5}
              columnGap={20}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel htmlFor="linkedin">LinkedIn</FormLabel>
                <Input
                  id="linkedin"
                  placeholder="LinkedIn Profile Link"
                  defaultValue={userProfile?.profile?.socialLinks?.linkedin}
                  {...register("linkedin")}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="instagram">Instagram</FormLabel>
                <Input
                  id="instagram"
                  placeholder="Instagram Profile Link"
                  defaultValue={userProfile?.profile?.socialLinks?.instagram}
                  {...register("instagram")}
                />
              </FormControl>
            </Stack>

            <Button
              mt={8}
              variant="outline"
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Update Profile
            </Button>
          </Box>
        </form>
      </Box>

      <Footer />
    </Box>
  );
};

export default UpdateProfile;
