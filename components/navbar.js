import styles from "../styles/Navigation.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <span>
        <h3>g3ar</h3>
      </span>
      <ul className={styles.navItem}>
        <li>
          <Link href="/about">
            <a>About me</a>
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
      </ul>
    </nav>
  );
};

export default Navbar;
