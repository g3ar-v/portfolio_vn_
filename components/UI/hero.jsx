import Link from "next/link";
import Article from "../article";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledLink = styled.a`
  &:link {
    margin: 3px;
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

const Hero = () => {
  return (
    <main className={styles.container}>
      <div className={styles.myselfContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Victor Nyoyoko...</h1>

          <code className={styles.code}>Software Engineer/Developer</code>

          <Article>
            <p>
              I am driven by an unceasing curiousity for engineering (as a
              career). This curiousity has fostered a discipline to learn,
              apply, imitate and produce different ideas and products. An any
              opportunity to experiment in any of the science field, I would
              like to contribute to society&apos;s advancement and also in the
              development of individuals to stimulate their productivity.
            </p>
          </Article>
        </div>
        <div className={styles.cardContainer}>
          <div className={`${styles.card} ${styles.card0}`}>
            <div className={styles.border}>
              <h2>dev</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <h1>On the Web</h1>
          <Link href="https://www.instagram.com/vikt4r/" passHref>
            <StyledLink>
              <FontAwesomeIcon icon={["fab", "instagram"]} /> Instagram
            </StyledLink>
          </Link>
          <Link href="https://open.spotify.com/user/frankjnr368" passHref>
            <StyledLink>
              <FontAwesomeIcon icon={["fab", "spotify"]} /> Spotify
            </StyledLink>
          </Link>
          <Link href="https://github.com/g3ar-v/" passHref>
            <StyledLink>
              <FontAwesomeIcon icon={["fab", "github-alt"]} /> Github
            </StyledLink>
          </Link>
          <Link href="https://www.fiverr.com/users/victornyoyoko/" passHref>
            <StyledLink> fiverr</StyledLink>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
