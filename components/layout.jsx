import { Box } from '@chakra-ui/react';
import LinkBar from './linkbar';
import Navbar from './navbar';
import Footer from './footer';

const Layout = (props) => {
  return (
    <Box
      display="flex"
      minHeight="100%"
      alignItems="flex-start"
      flexDirection="row"
      boxSizing="border-box"
    >
      <Navbar />
      <LinkBar />
      <Box boxSizing="border-box" display="block" flexGrow={1} pt="80px">
        <Box display="block" boxSizing="border-box">
          {props.children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
