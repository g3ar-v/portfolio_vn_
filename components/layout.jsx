import { Box, Flex } from '@chakra-ui/react';
import LinkBar from './linkbar';
import Navbar from './navbar';
import Footer from './footer';

const Layout = (props) => {
  return (
    <Box minH="100vh" ref={props.ref}>
      <Navbar />
      <Flex pt={10}>
        <LinkBar />
        <Box flex={1}>
          {props.children}
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
