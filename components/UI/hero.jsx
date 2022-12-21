import { Heading, Flex, Text, Box, VStack } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';

const Hero = () => {
  return (
    <Box className="Hero" h={900} display="flex" alignItems="center">
      <Flex
        direction="row"
        w="100%"
        borderTop="2px solid #44484C"
        borderBottom="2px solid #44484C"
        justifyContent="space-evenly"
        alignItems="center"
        pb={50}
        h={690}
      >
        <VStack w={600} align="start" spacing={20}>
          <VStack w={430} align="start">
            <Heading as="h2" variant="page-title" size="3xl">
              {`
              Software & Machine Learning`}
            </Heading>
            <Heading as="h2" variant="page-title-2">
              Engineer
            </Heading>
          </VStack>

          <Text variants="section" fontSize="xl">
            I design pipelines, choose models for training data, evaluate and
            train the models & fine-tune models.
          </Text>
        </VStack>
        <Box>
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
