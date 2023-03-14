import {
  Box,
  Highlight,
  Link,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioItem = ({
  // tags,
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
        <Text as="h3" casing="uppercase" variant={'sub-heading'} mt={2} mb={2}>
          {title}
        </Text>
        <p>
          <Highlight query={highlight} styles={{ color: 'yellow.500' }}>
            {description}
          </Highlight>
        </p>

        <LinkBox>
          <LinkOverlay as={Link} href={href} target="_blank">
            <FontAwesomeIcon icon={['fab', 'github-alt']} size="lg" /> source
            code
          </LinkOverlay>
        </LinkBox>
      </Box>
    </Box>
  );
};

export default PortfolioItem;
