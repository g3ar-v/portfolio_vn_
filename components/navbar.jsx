import NextLink from 'next/link';
import Logo from './logo';
import { Flex, Box, Link, Stack, useColorModeValue } from '@chakra-ui/react';

const NAVLINK = [
  // { path: '#expertise', display: 'Expertise' },
  { path: '#portfolio', display: 'Portfolio' }
];

// { path: "#contact", display: "Contact" }
const NavItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('teal', 'athsSpecial');

  return (
    <NextLink href={href} passHref>
      <Link color={active ? 'blue' : inactiveColor}>{children}</Link>
    </NextLink>
  );
};

export default function Navbar() {
  return (
    <Box
      as="nav"
      display="flex"
      zIndex={9999}
      left="0px"
      right="0px"
      ml="80px"
      pl="60px"
      wrap="wrap"
      position="fixed"
      height="80px"
      alignItems="center"
      bottom="720px"
      bg={useColorModeValue('blackAlpha.100', 'blackAlpha.500')}
      justifyContent="space-between"
      backdropFilter="blur(5px)"
      top="0px"
      borderBottom={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
    >
      <Logo />
      <Flex width="900px" justifyContent="space-between">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          width={{ base: 'full', md: 'auto' }}
          style={{ gap: `50px` }}
          mt={{ base: 4, md: 0 }}
        >
          {NAVLINK.map((item, index) => (
            <NavItem href={item.path} forwardedAs={item.path} key={index}>
              {item.display}
            </NavItem>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}
