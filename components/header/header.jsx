// import styles from "./Header.module.css";
import NextLink from 'next/link';
import {
  Flex,
  Box,
  Link,
  Stack,
  Button,
  useColorModeValue
} from '@chakra-ui/react';

const NAVLINK = [
  { path: '#expertise', display: 'Expertise' },
  { path: '#works', display: 'Works' }
];

// { path: "#contact", display: "Contact" }
const NavItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <NextLink href={href}>
      <Link color={active ? 'deepCarrotOrange' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  );
};

const NavButton = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  // return (
  //   <NextLink href={href} passHref>
  //     <Box
  //       as="contact-button"
  //       height="24px"
  //       lineHeight="1.2"
  //       transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
  //       border="1px"
  //       px="8px"
  //       borderRadius="2px"
  //       fontSize="14px"
  //       fontWeight="semibold"
  //       bg="#4b4f56"
  //       borderColor="#ccd0d5"
  //       color="#4b4f56"
  //       _hover={{ bg: '#ebedf0' }}
  //       _active={{
  //         bg: '#dddfe2',
  //         transform: 'scale(0.98)',
  //         borderColor: '#bec3c9'
  //       }}
  //       _focus={{
  //         boxShadow:
  //           '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
  //       }}
  //     >
  //       {children}
  //     </Box>
  //   </NextLink>
  // );
  //
  return (
    <NextLink href={href} passHref>
      <Button>{children}</Button>
    </NextLink>
  );
};

export default function Header() {
  return (
    <Box
      display="flex"
      zIndex={2}
      left="0%"
      right="0%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      bottom="auto"
      borderBottom="1px solid #37393f"
      p={25}
      wrap="wrap"
      position="fixed"
      alignItems="center"
      justifyContent="space-between"
    >
      <span>g3ar</span>
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
        <NavButton href="#contact" forwardedAs="#contact">
          Contact
        </NavButton>
      </Flex>
    </Box>
  );
}
