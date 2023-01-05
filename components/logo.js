import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import FootprintIcon from './gear';
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
    <Link href="/">
      <a>
        <LogoBox>
          <FootprintIcon />
          <Text
            as="div"
            whiteSpace="pre-wrap"
            color={useColorModeValue('blackMarlin', 'athsSpecial')}
            fontFamily="Plus Jakarta sans"
            fontWeight="700"
            ml={3}
            mb="5px"
          >
            Victor Nyoyoko
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
