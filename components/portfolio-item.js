import { Box, Link, HStack, Text, Tag, TagLabel } from '@chakra-ui/react';
import NextLink from 'next/link';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioItem = ({
  tags,
  title,
  thumbnail,
  link,
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
        <p>{description}</p>

        <NextLink href={link} passHref>
          <Link>
            <FontAwesomeIcon icon={['fab', 'github-alt']} size="lg" /> source
            code
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default PortfolioItem;
