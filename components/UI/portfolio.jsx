import { Box, Grid, Heading } from '@chakra-ui/react';
import PortfolioItem from '../portfolio-item';

// import portfolio_data from '../../data/portfolio_data.json';

import routine from '../../public/routine.jpg';
import machine from '../../public/machine.jpg';
import attendance from '../../public/attendance.jpg';

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
      title: 'MycroftAI (trevor)',
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
    }
  };
  return (
    <Box
      id="portfolio"
      pb="80px"
      pt="80px"
      display="block"
      boxSizing="border-box"
      position={'relative'}
      mb="40px"
      height="2000px"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        maxWidth="1500px"
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
          gridTemplateRows="736.438px 736.438px"
          gap="120px"
        >
          <PortfolioItem
            tags={portfolio_data.notion.tags}
            title={portfolio_data.notion.title}
            thumbnail={portfolio_data.notion.thumbnail}
            link={portfolio_data.notion.link}
            description={portfolio_data.notion.description}
          />
          <PortfolioItem
            tags={portfolio_data.trevor.tags}
            title={portfolio_data.trevor.title}
            thumbnail={portfolio_data.trevor.thumbnail}
            link={portfolio_data.trevor.link}
            description={portfolio_data.trevor.description}
          />
          <PortfolioItem
            tags={portfolio_data.attendance.tags}
            title={portfolio_data.attendance.title}
            thumbnail={portfolio_data.attendance.thumbnail}
            link={portfolio_data.attendance.link}
            description={portfolio_data.attendance.description}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Portfolio;
