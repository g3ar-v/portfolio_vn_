import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    'html, body': {
      bg: mode('#DBC8AC', '#161616')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'page-title': {
        fontSize: 50,
        color: '#37393F',
        _dark: { color: '#37393F' }
      },
      'page-title-2': {
        fontSize: 50,
        color: '#DBC8AC',
        textShadow: '10px 4px 10px #5C5A52',
        _dark: { color: '#443737', textShadow: 'none' }
      }
    }
  },
  Text: {
    variants: {
      'outline-s': {
        fontSize: 30,
        color: '#37393F'
      },
      'outline-p': {
        fontSize: 20,
        color: mode('#37393F', '#5C5A52')
      }
    }
  },

  Link: {
    baseStyle: (props) => ({
      color: mode('#6D9886', '#DBC8AC')(props),
      textUnderlineOffset: 3,
      _hover: {
        color: '#ED6C35'
      }
    })
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
  blue: '#1C3879',
  grey: '#5C5A52'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({ components, config, styles, fonts, colors });
export default theme;
