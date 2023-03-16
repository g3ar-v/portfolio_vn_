import NextLink from 'next/link';
import { forwardRef } from 'react';
import Logo from './logo';
import {
  Button,
  Flex,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Heading,
  Container,
  Spacer
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const NAVLINK = [
  { path: '#portfolio', display: 'Portfolio' },
  { path: '#about', display: 'About me' },
  { path: '#source', display: 'Source' }
];

const NavItem = ({ href, target, path, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('aqua', 'bayLeave');

  return (
    <Link
      as={NextLink}
      p={2}
      href={href}
      color={active ? 'blue' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};
const ContactButton = () => {
  return <Button variant="contact-button">Contact</Button>;
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

export default function Navbar(props) {
  const { path } = props;
  const borderBottom = `2px solid ${useColorModeValue('#37393F', '#37393F')}`;
  return (
    <Box
      as="nav"
      zIndex={9999}
      w="100%"
      position="fixed"
      // bg={useColorModeValue('blackAlpha.100', 'blackAlpha.500')}
      backdropFilter="blur(16px)"
      borderBottom={{ base: 'none', md: borderBottom }}
    >
      <Container
        display="flex"
        p={2}
        m={0}
        maxW={{ base: '100%', xl: '100%' }}
        align="center"
        justify="space-between"
        {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Container
          mr={0}
          width={{ base: null, md: '250vh' }}
          display={{ base: 'none', md: 'flex' }}
        >
          <Stack
            direction={{ base: null, md: 'row' }}
            alignItems="center"
            width={{ base: 'full', md: 'auto' }}
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            gap={20}
          >
            {NAVLINK.map((item, index) => (
              <NavItem href={item.path} path={path} key={index}>
                {item.display}
              </NavItem>
            ))}
          </Stack>
          <ContactButton />
        </Container>

        <Spacer />
        <Flex flex={1} direction="row" align="right" gap={5}>
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <ThemeToggleButton />
          </Box>
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="#portfolio">
                  Portfolio
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/g3ar-v/g3arzportfolio.git"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
