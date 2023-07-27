import { PaletteColorOptions } from '@mui/material/styles/createPalette'

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    custom: PaletteColorOptions;
  }
}