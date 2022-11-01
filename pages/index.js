import Head from "next/head";
import Hero from "../components/UI/hero";
import Expertise from "../components/UI/expertise";
import Projects from "../components/UI/projects";
import Contact from "../components/UI/contact";
import "../styles/font-awesome";

// import Image from "next/image";
// import Franky from "../public/1824.png";
// import Rebel from "../public/rebel.png";

// <div className={styles.s0}>
//   <Image src={Franky} alt="franky sticker" width={233} height={300} />
// </div>
// <div className={styles.s1}>
//   <Image
//     className={styles.s1}
//     src={Rebel}
//     alt="sunset sticker"
//     width={254}
//     height={300}
//   />
// </div>

export default function Home() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   props.theme == "light" ? setTheme("dark") : setTheme("light");
  //   theme = props.theme;
  // };

  return (
    <>
      <Head>
        <title>g3ar</title>
        <meta name="description" content="Understanding Victor Nyoyoko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
    </>
  );
}
