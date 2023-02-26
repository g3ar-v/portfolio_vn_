import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box margin="auto" position="absolute" bottom="0">
      <Box p={2} alignItems="center" fontSize="sm" color="sonicSilver">
        &copy; {new Date().getFullYear()} Victor Nyoyoko. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
