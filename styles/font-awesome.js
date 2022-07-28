import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faInstagram,
  faSpotify,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(faInstagram, faSpotify, faGithubAlt);
