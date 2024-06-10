import {
  Box, Flex, Heading,
} from '@chakra-ui/react';
import React from 'react';
import EmblaCarousel from '../components/carousel/embla-carousel';

const Portfolio = () => {

  const OPTIONS = { loop: true, align: 'start' }

  return (<Box
    pt="30px"
    mt="30px"
    className='portfolio'
    width="full"
  >
    <section id="portfolio"
    >
      <Flex
        direction="column"
        alignItems="flex-start"
        ml={{ base: '20px', md: '50px' }}
        mr={{ base: '20px', md: '50px' }}
      >
        <Heading as="h2" variant="component-title" size="2xl" pb={{ base: "50px" }}
          ml={{ base: '10px', md: '10px' }}
        >
          Portfolio
        </Heading>
        <EmblaCarousel options={OPTIONS} />
      </Flex>
    </section>
  </Box>
  );
};

export default Portfolio;
