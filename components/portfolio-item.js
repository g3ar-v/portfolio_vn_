import {
  Box,
  HStack,
  GridItem,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
  Tag,
  TagLabel
} from '@chakra-ui/react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioItem = ({ tags, title, thumbnail, link, description }) => (
  <GridItem
    display="block"
    textAlign="center"
    border={`3px solid ${useColorModeValue('teal', '#37393F')}`}
  >
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        height={730}
        placeholder="blur"
        loading="lazy"
      />

      <Box
        position="relative"
        top="-8px"
        borderTop={`3px solid ${useColorModeValue('teal', '#37393F')}`}
      >
        <LinkOverlay href={link} target="_blank">
          <Text
            casing="uppercase"
            decoration="underline"
            variant={'sub-heading'}
            mt={2}
          >
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={16}>{description}</Text>
        <HStack align="center" spacing={2} mt={2} ml={2}>
          {tags.map((element, index) => (
            <Tag key={index}>
              <HStack mt="5px" ml="15px" mr="15px">
                <FontAwesomeIcon
                  // color={`${useColorModeValue('teal', '#DBC8AC')}`}
                  icon={['fab', `${element.icon}`]}
                  size="md"
                />
                <TagLabel ml={2}>{element.name}</TagLabel>
              </HStack>
            </Tag>
          ))}
        </HStack>
      </Box>
    </LinkBox>
  </GridItem>
);

export default PortfolioItem;
