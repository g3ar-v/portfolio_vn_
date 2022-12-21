import styled, { createGlobalStyle } from 'styled-components';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#E6E1CC', '#363537')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'page-title': {
        fontSize: 50,
        color: mode('#5C5A52', '#37393F')
        // fontFamily: 'Plus Jakarta Sans'
      },
      'page-title-2': {
        fontSize: 50,
        color: mode('#E6E1CC', '#ED6C35'),
        textShadow: '10px 4px 10px #5C5A52'
      }
    }
  },
  Text: {
    variants: {
      section: {
        fontSize: 30
      }
    }
  },

  Link: {}
};

const fonts = {
  heading: "'Plus Jakarta Sans'"
};

const colors = {
  deepCarrotOrange: '#ED6C35',
  sonicSilver: '#757575'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

// const darkTheme = {
//   body: "#363537",
//   text: "#F5EDDC",
//   link: "#F5EDDC",
//   background: "#302E30"
// };

// const lightTheme = {
//   body: "#E6E1CC",
//   text: "#363537",
//   background: "#E6E1CC"
// };

// const StyledLink = ({ as, children, className, href }) => (
//   <Link href={href} as={as} passHref>
//     <a className={className}>{children}</a>
//   </Link>
// );

// const styled(StyledLink)`
//   font-weight: bold;
//   color: #3a3845;

//   &:link {
//     color: #434343;
//     font-weight: bold;
//     text-decoration: none;
//   }
//   &:hover {
//     color: #c69b7b;
//     font-weight: bold;
//   }
//   &:active {
//     color: #c69b7b;
//   }
// `;

// const GlobalStyles = createGlobalStyle`
// html,
// body {
// 	background: ${({ theme }) => theme.body};
// 	color: ${({ theme }) => theme.text};
// 	font-family:  Fira Code,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// 	transition: all 0.50s linear;
//   scroll-behavior: smooth;
//   --scroll-behavior: smooth;
// }

// ::-webkit-scrollbar {
//   width: 10px;
//   background: "#E6E1CC";
// }
// ::-webkit-scrollbar-thumb  {
//   border-radius: 9em;
//   background: #3a3845
// }
// `;

const theme = extendTheme({ components, config, styles, fonts, colors });
export default theme;
