import {
  Box,
  Highlight,
  Link,
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import { IoLogoGithub } from 'react-icons/io5';

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
          <Text as="h3" casing="uppercase"  mt={2} mb={5}>
            {duration}
          </Text>
        </Flex>
        <p>
          <Highlight query={highlight} styles={{ color: 'yellow.500' }}>
            {description}
          </Highlight>
        </p>

        {href !== '' ? (
          <LinkBox display="flex" flexDirection="row">
            <LinkOverlay as={Link} href={href} target="_blank" variant="portfolio-link"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <IoLogoGithub />
                github
              </span>
            </LinkOverlay>
          </LinkBox>
        ) : null}

      </Box>
    </Box >
  );
};

export default PortfolioItem;
