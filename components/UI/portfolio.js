import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import PortfolioItem from '../portfolio-item';
// import portfolio_data from '../../data/portfolio_data.json';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useState } from 'react';
import routine from '../../public/routine.jpg';
import machine from '../../public/machine.jpg';
import attendance from '../../public/attendance.jpg';
import dotfiles from '../../public/dotfile.jpeg';
import styles from '../../styles/Home.module.css';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// var $ = require('jquery');

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

const Portfolio = () => {
  const portfolio_data = {
    notion: {
      title: 'Notion Routine Skill',
      thumbnail: routine,
      link: 'https://github.com/g3ar-v/notion-routine-skill.git',
      tags: [
        {
          name: 'Machine Learning',
          icon: 'rebel'
        },
        {
          name: 'Python',
          icon: 'python'
        }
      ],

      description:
        'A skill for mycroftAI that notifies you on what you are supposed to do at any time and times you have selected. Notion is used as the database and stores the goals.'
    },
    trevor: {
      title: 'T.r.e.v.o.r',
      thumbnail: machine,
      link: '#',
      tags: [
        {
          name: 'ML',
          icon: 'rebel'
        },
        {
          name: 'Python',
          icon: 'python'
        },
        {
          name: 'Bash',
          icon: 'linux'
        }
      ],
      description:
        'A personal assistant that can do many things. It is built on top of mycroftAI.'
    },
    attendance: {
      title: 'Attendance System',
      thumbnail: attendance,
      link: '#',
      tags: ['Raspberry Pi', 'React', 'NodeJS', 'Flask'],
      tags: [
        {
          name: 'Raspberry Pi',
          icon: 'raspberry-pi'
        },
        {
          name: 'React',
          icon: 'react'
        },
        {
          name: 'NodeJS',
          icon: 'node-js'
        }
      ],
      description:
        'A system that can take attendance using a Fingerprint and an rfid.'
    },
    dotfiles: {
      title: 'Dotfiles',
      thumbnail: dotfiles,
      link: '#',
      tags: ['Bash', 'Python', 'Raspberry Pi'],
      tags: [
        {
          name: 'Bash',
          icon: 'linux'
        }
      ],
      description: 'My dotfiles for my Linux/Mac systems. '
    },
    xotfiles: {
      title: 'Dotfiles',
      thumbnail: dotfiles,
      link: '#',
      tags: ['Bash', 'Python', 'Raspberry Pi'],
      tags: [
        {
          name: 'Bash',
          icon: 'linux'
        }
      ],
      description: 'My dotfiles for my Linux/Mac systems. '
    }
  };
  const [activeIndex, setActiveIndex] = useState(null);

  function handleCarouselClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center'
  });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
  const portfolioItems = Object.keys(portfolio_data);
  return (
    <Box
      id="#portfolio"
      borderBottom={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
    >
      <Box
        pb="80px"
        pt="80px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        maxW="1500px"
        margin="auto"
        height="872.328px"
      >
        <Heading as="h2" variant="page-title" size="2xl">
          Portfolio
        </Heading>
        <Box className="embla" ref={emblaRef}>
          <Box padding="60px 30px" className="embla__container">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                tags={portfolio_data[item].tags}
                title={portfolio_data[item].title}
                thumbnail={portfolio_data[item].thumbnail}
                link={portfolio_data[item].link}
                description={portfolio_data[item].description}
                className={`${styles.item} embla__slide ${
                  activeIndex === index ? `${styles.active}` : ''
                }`}
                onClick={() => handleCarouselClick(index)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
