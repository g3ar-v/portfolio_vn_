import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box p={2} align="center" fontSize="sm" color="sonicSilver">
      &copy; {new Date().getFullYear()} Victor Nyoyoko. All rights reserved.
    </Box>
  );
};

export default Footer;
