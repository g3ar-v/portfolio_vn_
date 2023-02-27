import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import PortfolioItem from '../portfolio-item';
// import portfolio_data from '../../data/portfolio_data.json';

import { useState } from 'react';
import routine from '../../public/routine.jpg';
import machine from '../../public/machine.jpg';
import attendance from '../../public/attendance.jpg';
import styles from '../../styles/Home.module.css';

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
      title: 'Trevor',
      thumbnail: machine,
      link: '#',
      tags: [
        {
          name: 'Machine Learning',
          icon: 'rebel'
        },
        {
          name: 'Python',
          icon: 'python'
        },
        {
          name: 'Bash',
          icon: 'linux'
        },
        { name: 'MycroftAI', icon: 'rebel' }
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
      thumbnail: attendance,
      link: '#',
      tags: ['Bash', 'Python', 'Raspberry Pi'],
      tags: [
        {
          name: 'Bash',
          icon: 'linux'
        }
      ]
    }
  };
  const [isActive, setIsActive] = useState(false);
  const handleCarouselClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <Box borderBottom={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}>
      <Box
        id="portfolio"
        pb="80px"
        pt="80px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        boxSizing="border-box"
        position="relative"
        maxW="1500px"
        // mb="40px"
        margin="auto"
        height="872.328px"
      >
        <Heading as="h2" variant="page-title" size="2xl">
          Portfolio
        </Heading>
        <Box
          marginTop="-20px"
          padding="60px 50px"
          margin="15px 0"
          display="flex"
          position="relative"
          z-index="5"
          className="owl-carousel custom-carousel"
        >
          <PortfolioItem
            tags={portfolio_data.notion.tags}
            title={portfolio_data.notion.title}
            thumbnail={portfolio_data.notion.thumbnail}
            link={portfolio_data.notion.link}
            description={portfolio_data.notion.description}
            className={`${styles.item} ${isActive ? 'active' : ''}`}
            onClick={handleCarouselClick}
          />
          <PortfolioItem
            tags={portfolio_data.trevor.tags}
            title={portfolio_data.trevor.title}
            thumbnail={portfolio_data.trevor.thumbnail}
            link={portfolio_data.trevor.link}
            description={portfolio_data.trevor.description}
            className={`${styles.item} ${isActive ? 'active' : ''}`}
            onClick={handleCarouselClick}
          />
          <PortfolioItem
            tags={portfolio_data.attendance.tags}
            title={portfolio_data.attendance.title}
            thumbnail={portfolio_data.attendance.thumbnail}
            link={portfolio_data.attendance.link}
            description={portfolio_data.attendance.description}
            className={`${styles.item} ${isActive ? 'active' : ''}`}
            onClick={handleCarouselClick}
          />
          <PortfolioItem
            tags={portfolio_data.dotfiles.tags}
            title={portfolio_data.dotfiles.title}
            thumbnail={portfolio_data.dotfiles.thumbnail}
            link={portfolio_data.dotfiles.link}
            description={portfolio_data.dotfiles.description}
            className={`${styles.item} ${isActive ? 'active' : ''}`}
            onClick={handleCarouselClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
