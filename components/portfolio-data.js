import routine from '../public/routine.jpg';
import timer from '../public/timer.jpg';
import machine from '../public/machine.jpg';
import attendance from '../public/attendance.jpg';
import dotfiles from '../public/dotfile.jpeg';

const portfolio_data = {
  trevor: {
    title: 't.r.e.v.o.r',
    thumbnail: machine,
    link: 'https://github.com/g3ar-v/trevor-core.git',
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
      'A personal assistant built for automation of mainly, development\
      processes. It is built on top of mycroftAI. A modular sytem where each \
      parts can be interchanged. As of 2023 there are two enclosures in use;\
      Linux and raspberrypi. '
  },
  dotfiles: {
    title: 'Dotfiles',
    thumbnail: dotfiles,
    link: 'https://github.com/g3ar-v/dot-files.git',
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
      "Dotfiles for my Linux/Mac systems (.config/.conf). These are custom\
      configurations made for various programs used across different OS's. The\
      main setup to check out is my Neovim configuration. "
  },
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
    highlight: ['system'],
    description:
      'A system that can take attendance using a Fingerprint and an RFID.\
      There are four main components of this system. The backend, the front-end,\
      the raspberrypi and The database'
  }
};
export default portfolio_data;
