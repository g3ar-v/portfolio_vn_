import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import PortfolioItem from '../portfolio-item';
import data from '../portfolio-data';
import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  DotButton,
  NextButton,
  PrevButton
} from '../EmblaCarouselArrowDotsButton';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';

// var $ = require('jquery');
// if (typeof window !== 'undefined') {
//   window.$ = window.jQuery = require('jquery');
// }

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleCarouselClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      dragFree: true
    },
    [Autoplay()]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  const portfolio_data = data;
  const portfolioItems = Object.keys(portfolio_data);
  return (
    <Box
      id="#portfolio"
      borderBottom={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
    >
      <Flex
        direction="column"
        alignItems="flex-start"
        m={{ base: '30px', md: '40px' }}
      >
        <Heading as="h2" variant="page-title" size="2xl">
          Portfolio
        </Heading>
        <Box
          className="embla"
          ref={emblaRef}
          width={{ base: 'sm', md: '87vw' }}
        >
          <Box padding="60px 30px" className="embla__container">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                highlight={portfolio_data[item].highlight}
                tags={portfolio_data[item].tags}
                title={portfolio_data[item].title}
                thumbnail={portfolio_data[item].thumbnail}
                href={portfolio_data[item].link}
                description={portfolio_data[item].description}
                className={`${styles.item} embla__slide ${
                  activeIndex === index ? `${styles.active}` : ''
                }`}
                onClick={() => handleCarouselClick(index)}
              />
            ))}
          </Box>

          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          <Box className="embla__dots" style={{}}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Portfolio;
