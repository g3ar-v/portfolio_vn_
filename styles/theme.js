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
    borderRadius: '3px 0 0 3px',
    display: 'inline-block',
    height: '26px',
    lineHeight: '11px',
    padding: '0 20px 0 25px',
    position: 'relative',
    margin: ' 0 10px 10px 0',
    textDecoration: 'none',
    _before: {
      bg: '#DBC8AC',
      borderRadius: '10px',
      boxShadow: 'inset 0 1px rgba(0, 0, 0, 1)',
      content: "''",
      height: '6px',
      left: '10px',
      position: 'absolute',
      width: '6px',
      top: '10px'
    },
    color: '#37393F',
    bg: '#37393F',
    _after: {
      background: '#DBC8AC',
      borderBottom: '13px solid transparent',
      borderLeft: '13px solid #37393F',
      borderTop: '13px solid transparent',
      content: "''",
      position: 'absolute',
      right: 0,
      top: 0
    },
    _dark: {
      backround: '#37393F',
      _before: {
        background: '#161616',
        boxShadow: 'inset 0 1px rgba(79, 77, 82, 1)'
      },
      _after: {
        background: '#161616',
        borderBottom: '13px solid transparent',
        borderLeft: '13px solid #37393F',
        borderTop: '13px solid transparent',
        content: "''"
      }
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
      'sub-heading': {
        fontWeight: 'bold',
        textUnderlineOffset: '3px',
        lineHeight: '1.5'
      },
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
  },
  Tag: tagTheme
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
