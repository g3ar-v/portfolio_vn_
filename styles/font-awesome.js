import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faInstagram,
  faSpotify,
  faGithubAlt,
  faPython,
  faReact,
  faRebel,
  faRaspberryPi,
  faLinux,
  faNodeJs,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(
  faRebel,
  faNodeJs,
  faReact,
  faInstagram,
  faLinux,
  faPython,
  faRaspberryPi,
  faSpotify,
  faGithubAlt,
  faLinkedin,
  faTwitter
);
