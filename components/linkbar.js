import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import ThemeToggleButton from './theme-toggle-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkBar = () => {
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
          direction="column"
          position="absolute"
          top="747px"
          bottom="0px"
          left="0px"
          right="0px"
          pb="30px"
        >
          <Flex
            alignItems="stretch"
            direction="column"
            mb="0px"
            mt="0px"
            justifyContent="space-between"
            gap="10px"
          >
            <NextLink
              href="https://www.instagram.com/vikt4r/"
              passHref
              variant="baseStyle"
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} size="xl" />
            </NextLink>
            <NextLink href="https://open.spotify.com/user/frankjnr368" passHref>
              <FontAwesomeIcon icon={['fab', 'spotify']} size="xl" />
            </NextLink>
            <NextLink href="https://github.com/g3ar-v/" passHref>
              <FontAwesomeIcon icon={['fab', 'github-alt']} size="xl" />
            </NextLink>
            <ThemeToggleButton />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default LinkBar;
