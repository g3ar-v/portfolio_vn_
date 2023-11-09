import Head from 'next/head';
import Hero from '../components/UI/hero';
import Portfolio from '../pages/portfolio';
// import Conveyor from '../components/conveyor';
// import Contact from '../components/UI/contact';
import { Box } from '@chakra-ui/react';
import '../styles/font-awesome';

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Nyoyoko</title>
        <meta name="description" content="The vibe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box id="parent" w="100%">
        <Hero />
        <Portfolio />
        {/* <Contact /> */}
        {/* <Conveyor /> */}
      </Box>
    </>
  );
}
