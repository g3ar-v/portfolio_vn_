import Head from "next/head";
//import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/font-awesome";
import Article from "../components/article";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import { useTheme } from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>g3ar</title>
        <meta name="description" content="Understanding Victor Nyoyoko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.myselfContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Victor Nyoyoko...</h1>

            <p className={styles.description}>
              <code className={styles.code}>Software Engineer/Developer</code>
            </p>
            <Article>
              <p>
                Recently graduated from the University of Birmingham with a
                Masters of Engineering. A freelancer and a hobbyist in
                engineering in my spare time. I see myself in a couple of years
                taking on projects for people and mostly mine. etiam id
                scelerisque ligula, nec pharetra libero. Etiam non ornare
                tortor. Vivamus vitae finibus leo, bibendum commodo sem. Sed sit
                amet viverra enim. Aenean nunc arcu, lobortis ac elementum eget,
                convallis sed risus. Etiam nisl arcu, ultricies a magna sit
                amet, rutrum pharetra quam. Praesent tristique risus nec massa
                placerat cursus. Nullam porttitor quam in tellus pretium
                scelerisque. Donec vehicula rutrum nulla, et eleifend lacus.
                Praesent orci ligula, eleifend at nulla in, gravida bibendum
                lacus. Pellentesque consequat lobortis purus quis mattis. Sed
                viverra, metus vel ultricies facilisis, risus nulla dignissim
                dolor, a fermentum risus quam sit amet leo. Nam eu viverra nisi.
                Quisque vitae felis augue. Fusce non commodo nisl, non
                pellentesque ligula. Maecenas ut nibh a tellus accumsan accumsan
                nec vel nunc.
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
            <a
              href="https://www.instagram.com/vikt4r/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} /> Instagram
            </a>
            <a
              href="https://open.spotify.com/user/frankjnr368"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "spotify"]} /> Spotify
            </a>
            <a
              href="https://github.com/g3ar-v/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github-alt"]} /> Github
            </a>
            <a
              href="https://www.fiverr.com/users/victornyoyoko/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github-alt"]} /> Fiverr
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
