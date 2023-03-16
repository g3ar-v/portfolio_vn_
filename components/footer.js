import { Box } from '@chakra-ui/react';
{
  /* <Box
display="flex"
width="100%"
position=" relative"
bottom="0"
min-height="30px"
alignItems="center"
>

</Box>*/
}
const Footer = () => {
  return (
    <Box p={2} align="center" margin="auto" fontSize="sm" color="sonicSilver">
      &copy; {new Date().getFullYear()} Victor Nyoyoko. All rights reserved.
    </Box>
  );
};

export default Footer;
