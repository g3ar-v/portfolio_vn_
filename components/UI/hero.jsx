import {
  Heading,
  Flex,
  Text,
  Box,
  // Container,
  // Image,
  // useColorModeValue,
  // Link
} from '@chakra-ui/react';
import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Victor from "../../public/victor.png"
// import styles from '../../styles/Home.module.css';
// import NextLink from 'next/link';
// import { ExtLink } from '../svgs';

const Hero = () => {
  return (
    <Box
      id="#"
      // pb={10}
      mt={{ base: '50px', md: '30px' }}
      mb={{ base: '50px', md: '30px' }}
      // minH={{ base: '90vh', md: '0vh' }}
      h="calc(90vh)"
    // maxW={{ base: 'auto', xl: '1200px' }}
    ><Flex
      direction={{ base: "column", md: "row" }}
      justify={{ base: "start", md: "space-around" }}
      alignItems={{
        base: "start", md: "center"
      }}
      // width={{ md: "1500px" }}
      m={{ base: "20px", md: "0px" }}
      h="calc(90vh)"
      gap={10}
    >
        <Box
          maxW={{ base: 'full', md: '800px' }}
          ml={{ base: "0", md: "50px" }}
        >
          <Heading as="h1" variant="page-title-main" fontSize={{ base: "4rem", md: "10rem" }} style={{ marginBottom: '0' }}>
            Software
          </Heading>
          <Heading as="h1" variant="page-title-main" fontSize={{ base: "4rem", md: "10rem" }} >
            Engineer
          </Heading>
          {/* <Heading mt="30px" as="h2" variant="page-title-secondary" size="xl">
            Software Engineer
          </Heading> */}
        </Box>
        <motion.div
          initial={{ x: 500, opacity: 1 }} // Initial position of the box
          animate={{ x: 0 }} // Final position of the box
          transition={{ duration: 0.4 }} // Animation duration
        >
          <Box display={{ base: "block", md: "block" }} boxSizing="border-box" width={{ base: "400px", md: "600px" }}>
            <Text  size={{ base: "sm", md: "md" }} mb="31px" mt="30px">
              I possess an insatiable curiosity for the complexities of our world and the remarkable innovations that shape it.
              I view the world through the lens of engineering, particularly software, with curiosity as my &apos;focus ring&apos;. Whether I am peering through the software engineering lens or using another as the situation demands, my goal remains the same: to uncover the world&apos;s ingenious marvels.
            </Text>
            <Text  size={{ base: "sm", md: "md" }} mb="31px">
              I have a profound connection with electronics, mechanical architectures, music, art and philosophy. These diverse interests allow me to share a rich tapestry of experiences with you in an unconventional way.
            </Text>
          </Box>
        </motion.div>

      </Flex>
    </Box >
  );
};

export default Hero;
