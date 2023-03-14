/* Handles the theme and components from Chakra UI */

import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const styles = {
  global: (props) => ({
    'html, body': {
      bg: mode('#DBC8AC', '#161616')(props)
    }
  })
};

const baseStyle = definePartsStyle({
  container: {
    borderRadius: '3px',
    margin: 'auto',
    _dark: {
      color: '#DBC8AC',
      backround: 'transparent'
    }
  },
  label: defineStyle({
    color: '#DBC8AC',
    _dark: {
      color: '#DBC8AC'
    }
  })
});

const tagTheme = defineMultiStyleConfig({ baseStyle });

const components = {
  Heading: {
    variants: {
      'page-title-main': {
        sizes: {
          sm: {
            fontSize: 20
          },
          md: {
            fontSize: 25
          },
          lg: {
            fontSize: 50
          }
        },
        color: '#37393F',
        _dark: { color: '#37393F' }
      },
      'page-title-secondary': {
        sizes: {
          sm: {
            fontSize: 20
          },
          md: {
            fontSize: 25
          },
          lg: {
            fontSize: 50
          }
        },
        color: '#DBC8AC',
        textShadow: '10px 4px 10px #5C5A52',
        _dark: { color: '#a89984', textShadow: 'none' }
      },
      'page-title': {
        sizes: {
          sm: {
            fontSize: 20
          },
          md: {
            fontSize: 25
          },
          lg: {
            fontSize: 50
          }
        },
        color: '#37393F',
        marginLeft: '60px',
        _dark: { color: '#37393F' }
      },
      'page-title-mini': {
        fontSize: 30,
        sizes: {
          sm: {
            fontSize: 10
          },
          md: {
            fontSize: 15
          },
          lg: {
            fontSize: 30
          }
        },
        color: '#37393F',
        _dark: { color: '#37393F' }
      }
    }
  },
  Text: {
    variants: {
      'sub-heading': {
        fontWeight: 'bold',
        textUnderlineOffset: '3px',
        lineHeight: '1.5'
      },
      'outline-s': {
        fontSize: 30,
        color: '#504945'
      },
      'outline-p': {
        fontSize: 20,
        color: mode('#37393F', '#5C5A52')
      }
    }
  },

  Link: {
    baseStyle: (props) => ({
      color: mode('#427b58', '#7F9F93')(props),
      // textUnderlineOffset: 3,
      _hover: {
        color: '#af3a03',
        textDecoration: 'none'
      }
    })
  },
  Tag: tagTheme,
  Button: {
    variants: {
      outline: {
        color: '#427b58',
        padding: '39px',
        borderRadius: 0,
        borderWidth: '2px',
        borderColor: '#37393F',
        _dark: {
          color: '#7F9F93'
        },
        _hover: {
          bg: '#ddcfb7',
          color: '#af3a03',
          _dark: {
            color: '#af3a03',
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
  aqua: '#427b58'
};

const breakpoints = {
  sm: '414px',
  md: '584px',
  lg: '1280px'
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
  fonts,
  colors
});
export default theme;
