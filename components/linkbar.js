import { Box, Flex, Container, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import styles from '../styles/Home.module.css';
import ThemeToggleButton from './theme-toggle-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkBar = () => {
  const links = {
    instagram: {
      link: 'https://www.instagram.com/vikt4r/',
      icon: 'instagram'
    },
    twitter: {
      link: 'https://github.com/g3ar-v/',
      icon: 'github-alt'
    },
    spotify: {
      link: 'https://open.spotify.com/user/frankjnr368',
      icon: 'spotify'
    }
  };

  const iconColor = useColorModeValue('#427b58', '#7F9F93');

  return (
    <Box
      display="block"
      position="sticky"
      height="100vh"
      direction="column"
      top="80px"
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
        width="80px"
        top="0px"
      >
        <Flex
          boxSizing="border-box"
          alignItems="center"
          justifyContent="space-between"
          direction="column"
          position="relative"
          top="650px"
        >
          <Flex alignItems="center" direction="column" mb="30px">
            {Object.keys(links).map((item, index) => (
              <Container key={index} className={styles.links}>
                <NextLink href={links[item].link} passHref>
                  <FontAwesomeIcon
                    icon={['fab', `${links[item].icon}`]}
                    color={iconColor}
                    size="lg"
                  />
                </NextLink>
              </Container>
            ))}
          </Flex>
          <ThemeToggleButton />
        </Flex>
      </Box>
    </Box>
  );
};
export default LinkBar;
