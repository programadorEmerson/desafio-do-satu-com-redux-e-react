import { createTheme } from '@mui/material/styles'
import { ptBR as dataGridPtBr } from '@mui/x-data-grid'
import { ptBR as dateTimePtBr } from '@mui/x-date-pickers/locales'

const theme = createTheme(
  {
    palette: {
      primary: {
        light: '#42a5f5',
        main: '#1976d2',
        dark: '#1565c0',
      },
      secondary: {
        light: '#ba68c8',
        main: '#9c27b0',
        dark: '#7b1fa2',
      },
      error: {
        light: '#ef5350',
        main: '#d32f2f',
        dark: '#c62828',
      },
      warning: {
        light: '#ff9800',
        main: '#ed6c02',
        dark: '#e65100',
      },
      info: {
        light: '#03a9f4',
        main: '#0288d1',
        dark: '#01579b',
      },
      success: {
        light: '#4caf50',
        main: '#2e7d32',
        dark: '#1b5e20',
      },
      custom: {
        light: '#E0F7FA',
        main: '#B2EBF2',
        dark: '#80DEEA',
      },
      background: {
        default: '#575fcf',
      },
    },
  },
  dateTimePtBr,
  dataGridPtBr
)

export default theme
