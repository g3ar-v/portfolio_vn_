/* Handles the theme and components from Chakra UI */

import { color, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

// TODO: use constant color definition style here for light and dark theme
const styles = {
  global: (props) => ({
    'html, body': {
      // fontFamily: 'Plus Jakarta Sans',
      scrollBehavior: 'smooth',
      bg: mode('#efeee9', '#1c1c1c')(props),
      fg: mode('#000000', '#F3F3F3')(props)
    },

    '::-webkit-scrollbar-thumb': {
      '--tw-border-opacity': '0.5',
      'background-color': mode('#000000', '#757575')(props),
      'border-width': '1px',
      width: '0.1em'
    },
    '::-webkit-scrollbar': {
      'background-color': 'inherit',
      height: '0.5rem',
      width: '0.5rem'
    },
    '::-webkit-scrollbar-track-piece': {
      'background-color': 'transparent',
      'border-radius': '9999px'
    },
    '::-webkit-scrollbar-track': {
      'background-color': 'transparent',
      'border-radius': '9999px'
    }
  })
};

// const baseStyle = definePartsStyle({
//   container: {
//     padding: '10px',
//     // width: 'fit-content',
//     borderRadius: '6px',
//     _dark: {
//       backround: 'transparent'
//     }
//   },
//   label: defineStyle({
//     _dark: {}
//   })
// });
// const tagTheme = defineMultiStyleConfig({ baseStyle });

const components = {
  Heading: {
    baseStyle: (props) => ({
      color: mode('#000000', '#37393F')(props),
      fontFamily: 'Plus Jakarta Sans'
    }),
    variants: {
      'page-title-secondary': {
        color: mode('#757575', '#757575'),
        _dark: {}
      },
      'page-title-main': {
        color: '#000000',
        fontFamily: 'Plus Jakarta Sans',
        lineHeight: '1.0em',
        // fontWeight: '800',
        // textShadow: '10px 4px 10px #5C5A52',
        _dark: {
          color: '#F3F3F3',
          textShadow: 'none'
        }
      },
      'component-title': {
        fontFamily: 'Plus Jakarta Sans',
        color: '#000000',
        _dark: {
          color: '#37393F'
        }
      },
      'page-title-mini': {
        color: mode('#37393F', '#37393F'),
        _dark: {}
      }
    },
    sizes: {
      sm: {
        fontSize: 'sm'
      },
      md: {
        fontSize: '2xl'
      },
      lg: {
        fontSize: '3xl'
      }
    }
  },
  Text: {
    baseStyle: (props) => ({
      color: mode('#000000', '#F3F3F3')(props),
      fontFamily: 'Noto Serif'
    }),
    variants: {
      'sub-heading': {
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 'bold',
        textUnderlineOffset: '3px',
        lineHeight: '1.5'
      },
      'date-heading': {
        fontWeight: 'bold',
        color: '#b98929',
        textUnderlineOffset: '3px',
        lineHeight: '1.5'
      }
    },
    sizes: {
      sm: {
        fontSize: 'md'
      },
      md: {
        fontSize: '16px'
      }
    }
  },

  Link: {
    baseStyle: (props) => ({
      color: mode('#000000', '#5a5a5a')(props),
      fontWeight: 'bold',
      fontSize: '1.0rem',

      // textUnderlineOffset: 3,
      _hover: {
        color: mode('#676470', '#f3f3f3')(props),
        textDecoration: 'none'
      }
    }),
    variants: {
      'portfolio-link': {
        color: '#678b63',
        fontWeight: 'light',
        fontSize: '0.9rem',

        // textUnderlineOffset: 3,
        _hover: {
          color: '#676470',
          textDecoration: 'none'
        }
      }
    }
  },
  // Tag: tagTheme,
  Button: {
    variants: {
      'submit-button': {
        backgroundColor: '#427b58',
        color: 'white',
        borderWidth: '2px',
        _dark: {
          backgroundColor: '#7F9F93',
          color: 'white'
        },
        _hover: {
          bg: '#ddcfb7',
          _dark: {
            bg: '#040404'
          }
        }
      }
    }
  }
};

const fonts = {
  heading: "'Plus Jakarta Sans'",
  body: 'Plus Jakarta Sans, sans-serif',
  mono: 'Fira Code, Menlo'
};

const colors = {
  deepCarrotOrange: '#ED6C35',
  sonicSilver: '#757575',
  blackMarlin: '#37393F',
  athsSpecial: '#D8C9AF',
  teal: '#6D9886',
  bayLeave: '#7F9F93',
  blue: '#1C3879',
  grey: '#5C5A52',
  aqua: '#427b58',
  black: '#000000'
};

const breakpoints = {
  // sm: '175px',
  // md: '584px',
  // lg: '1280px',
  // xl: '1200px',
  // '2xl': '1536px'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({
  breakpoints,
  components,
  config,
  styles,
  colors
});
export default theme;
