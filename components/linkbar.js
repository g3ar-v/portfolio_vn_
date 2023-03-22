import { Box, Flex, Container, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkBar = () => {
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
    spotify: {
      link: 'https://open.spotify.com/user/frankjnr368',
      icon: 'spotify'
    },
    twitter: {
      link: 'https://twitter.com/victornyoyoko_',
      icon: 'twitter'
    }
  };

  const iconColor = useColorModeValue('#427b58', '#7F9F93');

  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      position="sticky"
      height="100vh"
      direction="column"
      top="60px"
      z-index={999}
      alignItems="center"
      justifyContent="flex-start"
      boxSizing="border-box"
      borderRight={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
    >
      <Box
        display="flex"
        position="sticky"
        flexDirection="column"
        alignItems="center"
        boxSizing="border-box"
        // width="80px"
        top="0px"
        m={3}
      >
        <Flex
          boxSizing="border-box"
          alignItems="center"
          justifyContent="space-between"
          direction="column"
          position="relative"
          top="650px"
        >
          {Object.keys(links).map((item, index) => (
            <Container key={index} className={styles.links}>
              <NextLink href={links[item].link} target="_blank" passHref>
                <FontAwesomeIcon
                  icon={['fab', `${links[item].icon}`]}
                  color={iconColor}
                  size="lg"
                />
              </NextLink>
            </Container>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
export default LinkBar;
