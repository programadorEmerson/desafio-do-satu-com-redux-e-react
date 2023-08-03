import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import App from './App.tsx'
import './index.css'
import store from './redux/store.ts'
import theme from './styles/theme.ts'

import 'dayjs/locale/pt-br'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </Provider>
)
