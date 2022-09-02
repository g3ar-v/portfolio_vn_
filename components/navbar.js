import styles from "../styles/Navigation.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    props.theme == "light" ? setTheme("dark") : setTheme("light");
    theme = props.theme;
  };
  props.func(theme);

  return (
    <nav className={styles.nav}>
      <span>
        <h3>g3ar</h3>
      </span>
      <ul className={styles.navItem}>
        <li>
          <Link href="/about">
            <a>Expertise</a>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <button onClick={toggleTheme}>toggle theme</button>
      </ul>
    </nav>
  );
};

export default Navbar;
