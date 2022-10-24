import styles from "./Header.module.css";
import Link from "next/link";
import styled from "styled-components";
import StyledLink from "../../styles/ThemeConfig";

const StyledButton = styled.button`
  color: #c69b7b;
  width: 40px;
  height: 40px;
  border: 2px solid black;
  background: #3a3845;
  border-radius: 3px;
`;

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
