import {
  Link
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import GearIcon from './gear';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: 700;
  font-size: 25px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 400ms ease;
  }

  &:hover > svg {
    transform: rotate(60deg);
  }
`;

const Logo = () => {
  return (
    <Link as={NextLink} href="#">
      <LogoBox>
        <GearIcon />
        {/* <Text
          color={useColorModeValue('blackMarlin', 'sonicSilver')}
          fontFamily="Plus Jakarta sans"
          fontWeight="700"
          ml={1}
        >
          Victor Nyoyoko
        </Text> */}
      </LogoBox>
    </Link>
  );
};

export default Logo;
