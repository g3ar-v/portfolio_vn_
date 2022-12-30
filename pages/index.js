import Head from 'next/head';
import Hero from '../components/UI/hero';
import Portfolio from '../components/UI/portfolio';
// import Contact from '../components/UI/contact';
import '../styles/font-awesome';

export default function Home() {
  return (
    <>
      <Head>
        <title>g3ar</title>
        <meta name="description" content="Understanding Victor Nyoyoko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Portfolio />
    </>
  );
}
