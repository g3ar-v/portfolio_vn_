import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import FootprintIcon from './gear';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 50px;
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
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <FootprintIcon />
          <Text
            color={useColorModeValue('blackMarlin', 'athsSpecial')}
            fontFamily="Playfair Display"
            fontWeight="700"
            mb="10px"
          >
            g3ar
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
