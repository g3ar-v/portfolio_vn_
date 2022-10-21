import styles from "../styles/Navigation.module.css";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

const StyledNavItem = styled.a`
  font-weight: bold;
  &:link {
    color: #434343;
    font-weight: bold;
  }
  &:hover {
    color: #c69b7b;
    font-weight: bold;
  }
  &:active {
    color: #c69b7b;
  }
`;

const StyledButton = styled.button`
  color: #c69b7b;
  width: 40px;
  height: 40px;
  border: 2px solid black;
  background: #3a3845;
  border-radius: 3px;
`;

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
          <Link href="/expertise">
            <StyledNavItem>Expertise</StyledNavItem>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <StyledNavItem>Projects</StyledNavItem>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <StyledNavItem>Contact</StyledNavItem>
          </Link>
        </li>
        <StyledButton onClick={toggleTheme}>T</StyledButton>
      </ul>
    </nav>
  );
};

export default Navbar;
