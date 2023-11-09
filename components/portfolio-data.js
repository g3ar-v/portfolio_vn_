import routine from '../public/routine.jpg';
import timer from '../public/timer.jpg';
import machine from '../public/machine.jpg';
import attendance from '../public/attendance.jpg';
import dotfiles from '../public/dotfile.jpeg';

const portfolio_data = {
  trevor: {
    title: 'CORE',
    thumbnail: machine,
    link: 'https://github.com/g3ar-v/trevor-core.git',
    duration: "2022-present",
    tags: [
      {
        name: 'Machine learning',
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
    highlight: ['automation', 'mycroftAI'],
    description:
      'A conversational AI assistant with the aim of providing information ASAP, serve as a reflector of user\'s thoughts.'
  },
  dotfiles: {
    title: 'Dotfiles',
    thumbnail: dotfiles,
    link: 'https://github.com/g3ar-v/dot-files.git',
    duration: "2023",
    tags: [
      {
        name: 'Bash',
        icon: 'linux'
      },
      {
        name: 'zsh',
        icon: 'linux'
      }
    ],
    highlight: ['Neovim'],
    description:
      "A storage for my Linux/Mac systems configurations. These are custom\
      configurations made for various programs used across different OS's."
  },
  notion: {
    title: 'REMINDER SKILL',
    thumbnail: routine,
    link: '',
    duration: "2022-present",
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
        name: 'Notion',
        icon: 'python'
      }
    ],

    highlight: ['mycroftAI'],
    description:
      "A skill for mycroftAI that notifies you on to-do's for the moment\
      do at any time and times you have selected. Notion is used as the\
      database and management of the actions."
  },

  timer: {
    title: 'timer skill',
    thumbnail: timer,
    link: 'https://github.com/g3ar-v/mycroft-timer.git',
    duration: "2022-present",
    tags: [
      {
        name: 'Bash',
        icon: 'linux'
      },
      {
        name: 'Python',
        icon: 'python'
      },
      {
        name: 'Raspberry pi',
        icon: 'raspberry-pi'
      }
    ],
    highlight: ['T.R.E.V.O.R', '(raspberrypi enclosure)'],
    description:
      'Display timer status using respeaker pixel ring light on T.R.E.V.O.R\
      (raspberrypi enclosure)'
  },

  attendance: {
    title: 'Attendance System',
    thumbnail: attendance,
    link: 'https://github.com/g3ar-v/UOBproject.git',
    duration: "2021-2022",
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
      },
      {
        name: 'Flask',
        icon: 'node-js'
      }
    ],
    highlight: ['data-caching'],
    description:
      'A system that can take attendance using a Fingerprint and an RFID with a data-caching mechanism to store and retrieve attendance information during network-latency disruptions'
  }
};
export default portfolio_data;
