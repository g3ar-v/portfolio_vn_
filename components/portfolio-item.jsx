import {
  Box,
  Highlight,
  Link,
  Flex,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

const PortfolioItem = ({
  duration,
  highlight,
  title,
  thumbnail,
  href,
  description,
  className,
  onClick
}) => {
  return (
    <Box
      className={className}
      onClick={onClick}
      style={{ backgroundImage: `url(${thumbnail.src})` }}
    >
      <Box className={styles.item_desc}>
        <Flex justifyContent="space-between">
          <Text as="h3" casing="uppercase" variant={'sub-heading'} mt={2} mb={5}>
            {title}
          </Text>
          <Text as="h3" casing="uppercase" variant={'date-heading'} mt={2} mb={5}>
            {duration}
          </Text>
        </Flex>
        <p>
          <Highlight query={highlight} styles={{ color: 'yellow.500' }}>
            {description}
          </Highlight>
        </p>

        <LinkBox display="flex" flexDirection="column">
          <LinkOverlay as={Link} href={href} target="_blank">
            <p>github↗</p>
          </LinkOverlay>
        </LinkBox>
      </Box>
    </Box>
  );
};

export default PortfolioItem;
