import {
  Box,
  GridItem,
  Text,
  Heading,
  Grid,
  Link,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import thumbNotion from '../../public/routine.jpg';

const notion = [
  {
    path: 'https://github.com/g3ar-v/notion-routine-skill.git',
    children: 'github'
  },
  {
    path: '',
    children: 'Machine Learning'
  },
  {
    path: '',
    children: 'Python'
  }
];
const NLink = ({ children, href }) => {
  return (
    <NextLink href={href} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};

const PortfolioItem = ({ children, href, title, thumbnail, link }) => (
  <GridItem
    display="block"
    textAlign="center"
    border={`3px solid ${useColorModeValue('grey', 'teal')}`}
    mb="20px"
  >
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        height={3900}
        placeholder="blur"
        loading="lazy"
      />

      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
      <Box gap="10px" display="flex" justifyContent="space-evenly" mb="25px">
        {link.map((item, index) => (
          <Box key={index} borderStyle="inset" borderRadius="3px" p={1}>
            <NLink href={item.path} forwardedAs={item.path} key={index}>
              {item.children}
            </NLink>
          </Box>
        ))}
      </Box>
    </LinkBox>
  </GridItem>
);

const Portfolio = () => {
  return (
    <Box
      id="portfolio"
      pb="80px"
      pt="80px"
      display="block"
      boxSizing="border-box"
      position={'relative'}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        maxWidth="1100px"
      >
        <Box
          mb="60px"
          display="block"
          position="relative"
          boxSizing="border-box"
          left="-450px"
        >
          <Heading as="h2" variant="page-title" size="2xl">
            Portfolio
          </Heading>
        </Box>
        <Grid
          flexWrap="wrap"
          boxSizing="border-box"
          alignItems="stretch"
          gridAutoColumns="1fr"
          gridTemplateColumns="470px 470px"
          gridTemplateRows="536.438px 477.172px"
          gap="120px"
        >
          <PortfolioItem
            href="https://github.com/g3ar-v/notion-routine-skill.git"
            title="Notion Routine Skill"
            thumbnail={thumbNotion}
            link={notion}
          >
            A skill for mycroftAI that notifies you on what you are supposed to
            do at any time and times you have selected. Notion is used as the
            database and stores the goals.
          </PortfolioItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Portfolio;
