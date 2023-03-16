import {
  Heading,
  Flex,
  Text,
  Box,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
import NextLink from 'next/link';
import { ExtLink } from '../svgs';

const Hero = () => {
  return (
    <Box
      id="/"
      pb={10}
      m={{ base: '30px', md: '30px 0px' }}
      minH={{ base: '90vh', md: '0vh' }}
      // maxW={{ base: 'auto', xl: '1200px' }}
      borderBottom={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
    >
      <Flex
        gridAutoColumns="1fr"
        gridTemplateColumns="0.25fr 0.75fr"
        gridTemplateRows="auto"
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Box
          maxW={{ base: 'full', md: '500px' }}
          // borderRight={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
        >
          <Heading as="h2" variant="page-title-main" size="2xl">
            Software &
          </Heading>
          <Heading as="h2" variant="page-title-main" size="2xl">
            Machine Learning
          </Heading>
          <Heading as="h2" variant="page-title-secondary" size="2xl">
            Engineer
          </Heading>
          <Box position="relative" display="block" boxSizing="border-box">
            <Text variant="outline-s" size="md" mb="31px" mt="30px">
              A machine learning researcher and software practitioner. I design
              pipelines, choose models for training data, evaluate, train &
              fine-tune these models.
            </Text>
            <Text variant="outline-s" size="md" mb="31px">
              The aim is to enhance productivity and quality of life by
              addresing real-world problems with Machine Learning & Software
            </Text>
            <Box
              borderRadius="lg"
              width="fit-content"
              p={3}
              bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')}
              css={{ backdropFilter: 'blur(10px)' }}
            >
              <Link as={NextLink} href="#portfolio" passHref>
                <Flex align="center" gap={2}>
                  <Text fontSize="md">ABOUT ME</Text>
                  <Box>
                    <ExtLink />
                  </Box>
                </Flex>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box display={{ base: 'none', md: 'block' }}>
          <div className={styles.cardContainer}>
            <div className={`${styles.card} ${styles.card0}`}>
              <div className={styles.border}>
                <h2>Victor Nyoyoko</h2>
              </div>
            </div>
          </div>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
