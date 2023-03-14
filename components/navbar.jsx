import NextLink from 'next/link';
import Logo from './logo';
import {
  Button,
  Flex,
  Box,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
// import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const NAVLINK = [
  { path: '#portfolio', display: 'Portfolio' },
  { path: '#source', display: 'Source' }
];

const NavItem = ({ href, target, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('aqua', 'bayLeave');

  return (
    <Link
      as={NextLink}
      href={href}
      color={active ? 'blue' : inactiveColor}
      target={target}
    >
      {children}
    </Link>
  );
};
const ContactButton = () => {
  return <Button variant="outline">Contact</Button>;
};
export default function Navbar() {
  return (
    <Box
      as="nav"
      display="flex"
      zIndex={9999}
      left="0px"
      right="0px"
      pl="60px"
      wrap="wrap"
      position="fixed"
      height="80px"
      alignItems="center"
      bottom="720px"
      bg={useColorModeValue('blackAlpha.100', 'blackAlpha.500')}
      justifyContent="space-between"
      backdropFilter="blur(16px)"
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
            <NavItem href={item.path} key={index}>
              {item.display}
            </NavItem>
          ))}
        </Stack>
        <ContactButton />
      </Flex>
    </Box>
  );
}
