import { themeModes } from './models'

export const tokensDark: any = {

  grey: {
    0: '#ffffff', // manually adjusted
    10: '#f6f6f6', // manually adjusted
    50: '#f0f0f0', // manually adjusted
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: 'rgba(102, 102, 102, 0.200)',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
    1000: '#000000' // manually adjusted
  },
  // primary: {  DEFAULT: '#153F90',  50: '#B9CEF5',  100: '#A8C1F2',  200: '#84A8ED',  300: '#608FE8',  400: '#3D75E3',  500: '#1F5ED7',  600: '#1A4FB4',  700: '#153F90',  800: '#0E2A5F',  900: '#07142E'},
  primary: {
    // griss
    100: '#B6B6B6',
    200: '#A1A1A1',
    300: '#8D8D8D',
    400: '#797979',
    500: '#646464',
    600: '#505050',
    700: '#3B3B3B',
    750: 'rgba(59, 59, 59, 0.20)',
    800: '#272727', // manually adjuste
    900: '#0B0B0B'
  },
  secondary: {
    // yellow
    50: '#FDC4AE',
    100: '#FDB59A',
    200: '#FC9772',
    300: '#FB7A4A',
    400: '#FA5D22',
    500: '#EF4405', // manually adjuste
    600: '#B83404',
    700: '#812503',
    800: '#4A1502',
    900: '#130500'
  }

}

// function that reverses the color palette
function reverseTokens (tokensDark: any) {
  const reversedTokens: any = {}
  Object.entries(tokensDark).forEach(([key, val]: any) => {
    const keys: any = Object.keys(val)
    const values: any = Object.values(val)
    const length = keys.length
    const reversedObj: any = {}
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1]
    }
    reversedTokens[key] = reversedObj
  })
  return reversedTokens
}
export const tokensLight = reverseTokens(tokensDark)

// mui theme settings
export const themeSettings = (mode: any) => {
  return {
    palette: {
      mode,
      ...(mode === themeModes.DARK
        ? {
          // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[600],
              light: tokensDark.primary[600]
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[500]
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500]
            },
            background: {
              default: tokensDark.primary[800],
              alt: tokensDark.primary[700],
              glass: tokensDark.primary[750]
            }
          }
        : {
          // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100]
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700]
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500]
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
              glass: tokensDark.grey[500]
            }
          })
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 40
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 32
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 24
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 20
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 14
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: '#6b6b6b #aaa',
            '& *::-webkit-scrollbar': {
              width: '6px !important',
              borderRadius: '5px !important'
            },
            '& *::-webkit-scrollbar-thumb': {
              display: 'none',
              background: '#aaa',
              transition: 'background .2s linear, width 2s ease-in-out',
              borderRadius: '10px'
            },
            '& *::-webkit-scrollbar-thumb: hover': {
              display: 'block',
              background: '#6b6b6b'
            }

          }
        }
      }

    }
  }
}
