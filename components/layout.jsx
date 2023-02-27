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
      m="0px"
    >
      <LinkBar />
      <Box
        className="page"
        // height="2100.88px"
        boxSizing="border-box"
        display="block"
        flexGrow={1}
        pt="80px"
      >
        <Navbar />
        <Box className="page-content" display="block" boxSizing="border-box">
          {props.children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
