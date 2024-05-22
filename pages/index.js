import Head from 'next/head';
import Hero from '../components/UI/hero';
import Portfolio from '../pages/portfolio';
// import Contact from '../components/UI/contact';
import { Box } from '@chakra-ui/react';
import '../styles/font-awesome';

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Nyoyoko</title>
        <meta name="description" content="Welcome to the personal portfolio website of Victor Nyoyoko, showcasing projects and professional achievements." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box id="parent" w="100%">
        <Hero />
        <Portfolio />
        {/* <Contact /> */}
      </Box>
    </>
  );
}
