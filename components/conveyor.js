import { Box, Heading, Text, Container } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import { NextJS, Neovim, Css, ChakraUI, Framer } from '../components/svgs';

function Conveyor() {
  return (
    <Box
      display="grid"
      alignContent="center"
      overflow="hidden"
      className={styles.belt}
      minHeight="50vh"
      // borderBottom={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
    >
      <Box
        mb="60px"
        display="block"
        position="relative"
        boxSizing="border-box"
        left="170px"
      >
        <Heading as="h2" variant="page-tile" size="xl">
          Designed with...
        </Heading>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        margin="auto"
        maxWidth="90vw"
        className={styles.wrapper}
      >
        <Box className={styles.marquee}>
          <Box className={styles.marquee__group}>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <NextJS />
              </svg>
              <Text>nextJS</Text>
            </Container>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <Neovim />
              </svg>
              <Text>neovim</Text>
            </Container>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <Css />
              </svg>
              <Text>CSS</Text>
            </Container>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <ChakraUI />
              </svg>
              <Text>chakra ui</Text>
            </Container>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <Framer />
              </svg>
              <Text>framer motion</Text>
            </Container>
          </Box>
          <Box className={styles.marquee__group}>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <NextJS />
              </svg>
              <Text>nextJS</Text>
            </Container>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <Neovim />
              </svg>
              <Text>neovim</Text>
            </Container>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <Css />
              </svg>
              <Text>CSS</Text>
            </Container>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <ChakraUI />
              </svg>
              <Text>chakra ui</Text>
            </Container>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <svg>
                <Framer />
              </svg>
              <Text>framer motion</Text>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Conveyor;
