import Head from 'next/head';
import Hero from '../components/UI/hero';
import Portfolio from '../components/UI/portfolio';
import Conveyor from '../components/conveyor';
// import Contact from '../components/UI/contact';
import '../styles/font-awesome';

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Nyoyoko</title>
        <meta name="description" content="Understanding Victor Nyoyoko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Portfolio />
        <Conveyor />
      </div>
    </>
  );
}
