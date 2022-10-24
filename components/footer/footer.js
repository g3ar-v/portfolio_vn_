import styles from "./Footer.module.css";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #c69b7b;
  width: 40px;
  height: 40px;
  border: 2px solid black;
  background: #3a3845;
  border-radius: 3px;
`;

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Victor Nyoyoko. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
