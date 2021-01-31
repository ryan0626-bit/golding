import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'

const palette = {
  // type: '',
  background: {
    // default: '#121212',
    // main: '#121212',
    // light: '#292929',
    // dark: '#0e0e0e',
    // paper: '#292929',
    // seeThrough: 'rgba(0, 0, 0, 0.5)',
  },
  primary: {
    main: 'rgb(225, 171, 31)',
    light: 'rgb(220, 205, 166)',
    dark: 'rgb(186, 143, 30)',
  },
  secondary: {
    main: '#ab3131',
    dark: '#ececec',
  },
  tertiary: {
    main: '#ff1717',
  },
  grey: {
    main: '#f3f3f3',
    dark: '#919191',
  },
  priorities: {
    1: {
      main: '#ab3131',
      action: '',
    },
    2: {
      main: '#ea8a1d',
      action: '',
    },
    3: {
      main: '#e8e920',
      action: '',
    },
    4: {
      main: '#0bda0b',
      action: '',
    },
  },
  hr: {
    main: '#4d636b',
    monochrome: '#555',
  },
  danger: {
    main: '#DC3644',
  },
  imageLabel: {
    main: '#0F85B3',
    dark: '#0D0D0D',
  },
  gradient: {
    light: '#166B8B',
    dark: '#2A2A2A',
  },
}

const mixins = {
  shadow: dist => {
    dist = dist ?? 2
    return {
      boxShadow: `-${dist}px ${dist}px ${dist * 3}px #000d`,
    }
  },
  borderRadius: radius => {
    radius = radius ?? 4
    return {
      borderRadius: `${radius}px`,
    }
  },
  circleHover: (radius, color) => {
    color = color ?? palette.primary.main
    radius = radius ?? '0.5rem'

    return {
      '&::before': {
        content: '""',
        display: 'block',
        width: `calc(100% + ${radius})`,
        height: `calc(100% + ${radius})`,
        backgroundColor: 'transparent',
        position: 'absolute',
        borderRadius: '10em',
        opacity: '0.25',
        transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
      '&:hover::before': {
        backgroundColor: color || palette.primary.main,
      },
    }
  },
}

const typography = {
  fontFamily: '"Arial", Roboto, tahoma, sans-serif',
  default: {
    color: palette.secondary.main,
  },
}

const theme = createMuiTheme({
  typography,
  palette,
  overrides: {
    MuiInputBase: {
      // letterSpacing: '1px',
      // lineHeight: '1.4',
    },
    MuiIconButton: {
      root: {
        // Default MUI icon button backgrounds add a padding, increasing the size of the DOM element and ruining layouts
        padding: 0,
        ...mixins.circleHover(),
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      label: {
        zIndex: 2,
      },
    },
    MuiListItem: {
      root: {
        padding: 0,
      },
    },
    MuiButton: {
      text: {
        color: palette.secondary.main,
        padding: '0.5em 0.75em',
        fontWeight: 'bold',
        lineHeight: 1,
        boxShadow: '0px 0px 0.25em #0002 inset, -2px 2px 0.25em #0004',
      },
      root: {
        borderRadius: 20,
        padding: '0.5em 0.75em',
        fontWeight: 'bold',
        color: 'white',
        // lineHeight: 1,
        boxShadow: '0px 0px 0.25em #0002 inset, -2px 2px 0.25em #0004',
      },
    },
    MuiBadge: {
      colorPrimary: {
        color: palette.secondary.main,
      },
      colorSecondary: {
        color: 'black',
      },
      badge: {
        color: palette.secondary.main,
        fontWeight: 'bold',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '0.9rem',
        fontWeight: 'bold',
        backgroundColor: palette.primary.main,
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: typography.fontFamily,
        },
        button: {
          fontFamily: typography.fontFamily,
        },
        p: {
          letterSpacing: '1px',
        },
        '.fullscreen-enabled': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
        '*::-webkit-scrollbar': {
          width: '1px',
        },
        '*::-webkit-scrollbar-track': {
          // background: palette.primary.dark,
        },
        '*::-webkit-scrollbar-thumb': {
          // background: palette.primary.main,
        },
        '*::-webkit-scrollbar-thumb:hover': {
          // background: palette.primary.light,
        },
      },
    },
    MuiTablePagination: {
      root: {
        overflow: 'initial',
      },
    },
  },
  mixins,
  sidePanel: {
    titleHeight: 3, // rem units
    brandingHeight: 6, // rem units
    gutter: '1.5rem',
  },
})

export default function AppTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
