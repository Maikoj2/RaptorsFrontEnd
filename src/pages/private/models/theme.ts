export interface themeMode {
  Mode: string
}

export enum themeModes {
  DARK = 'dark',
  LIGHT = 'light',
}
export const themeInicialState: themeMode = {
  Mode: themeModes.DARK
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}
