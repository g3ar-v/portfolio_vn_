import machine from '../public/machine.jpg';
import attendance from '../public/attendance.jpg';
import dotfiles from '../public/dotfile.jpeg';

const portfolio_data = {
  trevor: {
    title: 'CORE',
    thumbnail: machine,
    link: '',
    duration: "2022-present",
    highlight: [],
    videos: ["tts_to_mac", "reminder_agent"],
    description:
      'A conversational AI assistant with the aim of providing information ASAP if offline or\
      online.'
  },
  dotfiles: {
    title: 'Dotfiles',
    thumbnail: dotfiles,
    link: 'https://github.com/g3ar-v/dot-files.git',
    duration: "2023",
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
    videos: ["rfid_entry_exit", "fingerprint_entry_exit"],
    description:
      'A system that can take attendance using a Fingerprint and an RFID with a data-caching mechanism to store and retrieve attendance information during network-latency disruptions'
  }
};
export default portfolio_data;
