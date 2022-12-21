import { Box, Flex, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import Header from './header/header';
import Footer from './footer/footer';
import ThemeToggleButton from './theme-toggle-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout = (props) => {
  return (
    <Box as="main" display="flex">
      <Flex
        position="sticky"
        width="120px"
        height="100vh"
        direction="column"
        pt={10}
        top="0px"
        borderRight="2px solid #44484C"
        alignItems="center"
        justifyContent="flex-start"
      >
        <VStack
          w={100}
          pl="2"
          position="absolute"
          left="-10%"
          top="auto"
          bottom="0%"
          pb={10}
          gap={2}
        >
          <Link href="https://www.instagram.com/vikt4r/" passHref>
            <FontAwesomeIcon icon={['fab', 'instagram']} size="xl" />
          </Link>
          <Link href="https://open.spotify.com/user/frankjnr368" passHref>
            <FontAwesomeIcon icon={['fab', 'spotify']} size="xl" />
          </Link>
          <Link href="https://github.com/g3ar-v/" passHref>
            <FontAwesomeIcon icon={['fab', 'github-alt']} size="xl" />
          </Link>
          <ThemeToggleButton />
        </VStack>
      </Flex>
      <Box>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
