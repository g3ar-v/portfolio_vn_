import machine from '../public/machine.jpg';
import attendance from '../public/attendance.jpg';
import dotfiles from '../public/newdotfile.png'
import ai2 from '../public/ai2.jpg';

const portfolio_data = {
  assistant: {
    title: 'VASCO-rewrite',
    thumbnail: ai2,
    link: 'https://github.com/g3ar-v/assistant.git',
    duration: "2024",
    highlight: [],
    description:
      'A major focus on generating and running code to complete tasks on macOS'
  },
  vasco: {
    title: 'VASCO',
    thumbnail: machine,
    link: 'https://github.com/g3ar-v/vasco.git',
    duration: "2022",
    highlight: [],
    description:
      'A conversational AI assistant with the aim of providing information ASAP if offline or\
      online. With an event driven design'
  },
  dotfiles: {
    title: 'Dotfiles',
    thumbnail: dotfiles,
    link: 'https://github.com/g3ar-v/dot-files.git',
    duration: "",
    highlight: [''],
    description:
      "Linux/Mac systems configurations. These are custom\
      configurations made for various programs used across different OS's."
  },
  attendance: {
    title: 'Attendance System',
    thumbnail: attendance,
    link: 'https://github.com/g3ar-v/UOBproject.git',
    duration: "2021-2022",
    highlight: ['data-caching'],
    description:
      'A system that can take attendance using a Fingerprint and an RFID with a data-caching mechanism to store and retrieve attendance information during network-latency disruptions'
  }
};
export default portfolio_data;
