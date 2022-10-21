import Article from "../components/article";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

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

export default function Home() {
  return (
    <div>
      <div className={styles.myselfContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Victor Nyoyoko...</h1>

          <p className={styles.description}>
            <code className={styles.code}>Software Engineer/Developer</code>
          </p>
          <Article>
            <p></p>
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
    </div>
  );
}
