import { Link as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import Logo from './logo';
import {
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
  Container
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { IoLogoGithub } from 'react-icons/io5';

const NAVLINK = [
  { path: '#portfolio', display: 'Portfolio' },
  // { path: '#about', display: 'About' },
  // { path: '#contact', display: 'Contact' }
];

const NavItem = ({ href, path, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('#37393F', '#757575');

  return (
    <Link
      as={NextLink}
      p={2}
      href={href}
      // NOTE: this doens't work because using the scroll function doesn't load Navbar 
      // component
      color={active ? 'yellow.500' : inactiveColor}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

export default function Navbar(props) {
  // const { path } = props;
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <Box
      as="nav"
      zIndex={9999}
      w="100%"
      position="fixed"
      backdropFilter="blur(16px)"
      // borderBottom={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
    >
      <Container
        display="flex"
        p={2}
        m={0}
        maxW={{ base: 'full', xl: '100%' }}
        align="center"
        justifyContent="space-between"
        {...props}
      >
        <Flex align="center" ml={0}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Container
          mr={0}
          width={{ base: null, md: '250vh' }}
          display={{ base: 'none', md: 'flex' }}
        // alignSelf="self-end"
        >
          <Stack
            direction={{ base: null, md: 'row' }}
            alignItems="center"
            width={{ base: 'full', md: 'auto' }}
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            gap={10}
          >
            {NAVLINK.map((item, index) => (

              <NavItem href={item.path} path={currentPath} key={index}>
                {item.display}
              </NavItem>
            ))}
            <NavItem
              href="https://github.com/g3ar-v/g3arzportfolio.git"
              display="inline-flex"
              path={currentPath}
              gap={2}
              alignItems="center"
              pl={2}
            >
              <IoLogoGithub /> View Source
            </NavItem>
          </Stack>
          <ThemeToggleButton />
        </Container>

        <Box
          // flex={1}
          direction="row"
          align="flex-end"
          justify="space-around"
          gap={5}
          display={{ base: 'flex', md: 'none' }}
        >
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
                {NAVLINK.map((item, index) => (
                  <MenuItem as={MenuLink} href={item.path} key={index}>
                    {item.display}
                  </MenuItem>
                ))}
                <MenuItem
                  as={Link}
                  href="https://github.com/g3ar-v/g3arzportfolio.git"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
