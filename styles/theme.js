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
    padding: '10px',
    // width: 'fit-content',
    borderRadius: '6px',
    _dark: {
      backround: 'transparent'
    }
  },
  label: defineStyle({
    _dark: {}
  })
});

const tagTheme = defineMultiStyleConfig({ baseStyle });

const components = {
  Heading: {
    variants: {
      'page-title-main': {
        color: '#37393F',
        _dark: { color: '#37393F' }
      },
      'page-title-secondary': {
        color: '#EDE3D4',
        textShadow: '10px 4px 10px #5C5A52',
        _dark: { color: '#a89984', textShadow: 'none' }
      },
      'page-title': {
        color: '#37393F',
        _dark: { color: '#37393F' }
      },
      'page-title-mini': {
        color: '#37393F',
        _dark: { color: '#37393F' }
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
        fontSize: '2xl'
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
        color: '#504945'
      },
      'outline-p': {
        fontSize: 20,
        color: mode('#37393F', '#5C5A52')
      }
    },
    sizes: {
      sm: {
        fontSize: 'lg'
      },
      md: {
        fontSize: 'xl'
      },
      lg: {
        fontSize: '2xl'
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
      'contact-button': {
        color: '#427b58',
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
  // sm: '375px',
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
  fonts,
  colors
});
export default theme;
