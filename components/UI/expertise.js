import styles from "../../styles/Expertise.module.css";
import styled from "styled-components";
import Link from "next/link";
import Article from "../article";

const StyledLink = styled.a`
  color: #c69b7b;
  background: #3a3845;
  padding: 0.75rem;
  border-radius: 10px;
  text-decoration: none;
  height: 20px;
  width: 90px;

  &:link {
  }
  &:hover {
    color: #c69b7b;
    background: #3a3845;
    border-radius: 9px;
    margin: 3px;
    width: 100px;
  }
  &:active {
    color: #c69b7b;
    background: #3a3845;
    border-radius: 9px;
    margin: 3px;
    width: 100px;
  }
`;

const Expertise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Expertise & Area of Interests</h1>
      </div>

      <div className={styles.brick_container}>
        <div className={styles.brick}>
          <p className={styles.item}>Machine Learning</p>
          <p className={styles.item}>Computer Vision</p>
          <p className={styles.item}>Embedded Programming</p>
          <p className={styles.item}>Internet of Things</p>
          <p className={styles.item}>Front-end development</p>
          <p className={styles.item}>Back-end development</p>
          <Link
            href="https://github.com/g3ar-v/dot-files/tree/master/.config/nvim"
            passHref
          >
            <StyledLink>Neovim</StyledLink>
          </Link>
        </div>
        <div className={styles.description}>
          <Article>
            I would like to think I am an all-rounder and I find myself not
            conforming to any particular computer field. I have seasons were I
            work in an area and when projects require certain areas.
          </Article>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
