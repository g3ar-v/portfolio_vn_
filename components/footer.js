import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      display="flex"
      width="100%"
      position=" relative"
      bottom="0"
      min-height="30px"
      alignItems="center"
    >
      <Box p={2} margin="auto" fontSize="sm" color="sonicSilver">
        &copy; {new Date().getFullYear()} Victor Nyoyoko. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
