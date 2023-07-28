import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import theme from '@/styles/theme'

import 'dayjs/locale/pt-br'

import App from './App'
import './index.css'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <App />
          <CssBaseline />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
