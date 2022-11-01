import styles from "./Header.module.css";
import Link from "next/link";
import StyledLink from "../../styles/ThemeConfig";

const NAVLINK = [
  { path: "/", display: "Home" },
  { path: "#expertise", display: "Expertise" },
  { path: "#projects", display: "Projects" },
  { path: "#contact", display: "Contact" }
];

export default function Header() {
  return (
    <header className={styles.header}>
      <span>
        <Link href="/">
          <h3>g3ar</h3>
        </Link>
      </span>
      <div className={styles.navigation}>
        {NAVLINK.map((item, index) => (
          <StyledLink href={item.path} forwardedAs={item.path} key={index}>
            {item.display}
          </StyledLink>
        ))}
      </div>
    </header>
  );
}
