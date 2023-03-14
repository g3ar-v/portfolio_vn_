import {
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react';
import GearIcon from './gear';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: 700;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(40deg);
  }
`;

const Logo = () => {
  return (
    <LinkBox>
      <LogoBox>
        <GearIcon />
        <LinkOverlay href="/">
          <Text
            as="div"
            whiteSpace="pre-wrap"
            color={useColorModeValue('blackMarlin', 'blackMarlin')}
            fontFamily="Plus Jakarta sans"
            fontWeight="700"
            ml={1}
            mb="2px"
          >
            Victor Nyoyoko
          </Text>
        </LinkOverlay>
      </LogoBox>
    </LinkBox>
  );
};

export default Logo;
