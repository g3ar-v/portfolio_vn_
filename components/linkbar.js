import { Box, Flex, Container, Link } from '@chakra-ui/react';
// import Link from '@chakra-ui/react'

import { Link as NextLink } from 'next/link';

import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkBar = () => {
  // const borderColor = useColorModeValue('#000000', '#37393F');
  const links = {
    linkedin: {
      link: 'https://www.linkedin.com/in/victor-nyoyoko-1a1518196/',
      icon: 'linkedin'
    },
    instagram: {
      link: 'https://www.instagram.com/vikt4r/',
      icon: 'instagram'
    },
    github: {
      link: 'https://github.com/g3ar-v/',
      icon: 'github-alt'
    },
    twitter: {
      link: 'https://twitter.com/victornyoyoko_',
      icon: 'twitter'
    }
  };

  return (
    <Box
      display={{ base: 'none', md: 'flex' }}
      position="sticky"
      height="170vh"
      direction="column"
      top="50px"
      bottom="0"
      z-index={999}
      justifyContent="flex-end" // Changed from 'space-around' to 'flex-end' to move the icons to the bottom
      alignItems="flex-end"
      boxSizing="border-box"
      // borderRight={`2px solid ${borderColor}`}
    >
      <Box
        display="block"
        position="sticky"
        bottom="20px"
        flexDirection="column"
        alignItems="center"
        boxSizing="border-box"
        m={3}
      >
        <Flex
          boxSizing="border-box"
          alignItems="center"
          justifyContent="space-between"
          direction="column"
          position="relative"
          gap={2}
        >
          {Object.keys(links).map((item, index) => (
            <Container key={index} className={styles.links}>
              <Link as={NextLink} href={links[item].link} target="_blank">
                <FontAwesomeIcon
                  icon={['fab', `${links[item].icon}`]}
                  size="lg"
                />
              </Link>
            </Container>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
export default LinkBar;
