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
      top="0px"
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
        pt="10px"
        alignItems="center"
        boxSizing="border-box"
        mt="0px"
        mb="0px"
        z-index="2"
        width="80px"
        height="887px"
        top="0px"
      >
        <Flex
          boxSizing="border-box"
          alignItems="center"
          justifyContent="space-between"
          direction="column"
          position="absolute"
          top="747px"
          bottom="0px"
          left="0px"
          right="0px"
          pb="30px"
          gap="20px"
        >
          <Flex
            alignItems="center"
            direction="column"
            // justifyContent="space-between"
            // gap="10px"
            // flexGrow="2"
          >
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
