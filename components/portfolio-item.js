import {
  Box,
  HStack,
  // Text,
  LinkBox,
  // LinkOverlay,
  Tag,
  TagLabel
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioItem = ({
  tags,
  title,
  thumbnail,
  // link,
  description,
  className,
  onClick
}) => {
  return (
    <Box className={className} onClick={onClick}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          // className="grid-item-thumbnail"
          // maxW="100%"
          // border="0px"
          // height={730}
          placeholder="blur"
          loading="lazy"
        />

        <Box className={styles.item_desc}>
          {/* <LinkOverlay href={link} target="_blank">
          <Text
            casing="uppercase"
            decoration="underline"
            variant={'sub-heading'}
            mt={2}
          >
            {title}
          </Text>
        </LinkOverlay>
        */}
          <p>{description}</p>
          <HStack flexWrap="wrap" align="center" spacing={2} mt={2} ml={2}>
            {tags.map((element, index) => (
              <Tag key={index}>
                <HStack mt="5px" ml="15px" mr="15px">
                  <FontAwesomeIcon
                    icon={['fab', `${element.icon}`]}
                    size="sm"
                  />
                  <TagLabel ml={2}>{element.name}</TagLabel>
                </HStack>
              </Tag>
            ))}
          </HStack>
        </Box>
      </LinkBox>
    </Box>
  );
};

export default PortfolioItem;
