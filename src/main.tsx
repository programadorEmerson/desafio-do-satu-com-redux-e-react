import React from 'react'
import ReactDOM from 'react-dom/client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import App from './App.tsx'
import './index.css'
import theme from './styles/theme.ts'

import 'dayjs/locale/pt-br'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
