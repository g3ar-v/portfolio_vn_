import TOC from '../tableofcontents';
import { Grid, Flex, Box, Text, Heading, GridItem } from '@chakra-ui/react';

const Expertise = () => {
  return (
    <Grid
      id="#expertise"
      boxSizing="border-box"
      templateAreas={`"content toc"`}
      templateColumns={'1fr 250px'}
      pl="16px"
      pr="16px"
      pt="50px"
      pb="50px"
    >
      <GridItem area={'content'}>
        <Box mb="40px">
          <Heading as="h2" variant="page-section" size="2xl">
            Expertise
          </Heading>
        </Box>
        <Flex direction="column" alignItems="center">
          <Heading id="machinelearning" as="h3" size="xl">
            Machine Learning
          </Heading>
          <Text variant="outline-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex
            tempus, cursus mi nec, volutpat diam. Curabitur lectus magna,
            maximus vitae ante ac, egestas efficitur lectus. Duis sagittis enim
            non euismod auctor. Maecenas pretium laoreet elit id consequat. Sed
            molestie, nibh a faucibus faucibus, odio odio varius ipsum, non
            suscipit est magna ac dolor. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Curabitur
            bibendum pulvinar risus quis iaculis. Mauris dui turpis, tempor eget
            purus mollis, auctor tincidunt quam. Nam sed sagittis lorem.
            Curabitur et nunc eu neque ultrices dapibus. Fusce tortor risus,
            lobortis quis porttitor nec, luctus et justo. Nullam quis dictum
            est, ut sodales eros. Maecenas tristique sollicitudin maximus. Sed
            luctus mauris nunc, et facilisis sapien iaculis eget. Duis nec
            mauris vel quam luctus pellentesque. Mauris egestas vestibulum orci,
            eget gravida nulla tempus ac.
          </Text>

          <Heading id="webdevelopment" as="h3" size="xl">
            Web Development
          </Heading>
          <Text variant="outline-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex
            tempus, cursus mi nec, volutpat diam. Curabitur lectus magna,
            maximus vitae ante ac, egestas efficitur lectus. Duis sagittis enim
            non euismod auctor. Maecenas pretium laoreet elit id consequat. Sed
            molestie, nibh a faucibus faucibus, odio odio varius ipsum, non
            suscipit est magna ac dolor. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Curabitur
            bibendum pulvinar risus quis iaculis. Mauris dui turpis, tempor eget
            purus mollis, auctor tincidunt quam. Nam sed sagittis lorem.
            Curabitur et nunc eu neque ultrices dapibus. Fusce tortor risus,
            lobortis quis porttitor nec, luctus et justo. Nullam quis dictum
            est, ut sodales eros. Maecenas tristique sollicitudin maximus. Sed
            luctus mauris nunc, et facilisis sapien iaculis eget. Duis nec
            mauris vel quam luctus pellentesque. Mauris egestas vestibulum orci,
            eget gravida nulla tempus ac.
          </Text>
        </Flex>
      </GridItem>
      <GridItem bg="whiteAlpha.100" area={'toc'}>
        <TOC />
      </GridItem>
    </Grid>
  );
};

export default Expertise;
