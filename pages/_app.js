import Fonts from '../components/fonts';
import theme from '../styles/theme';
import Layout from '../components/layout';
import '../styles/carousel.css';
import { ChakraProvider } from '@chakra-ui/react';

function Website({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
