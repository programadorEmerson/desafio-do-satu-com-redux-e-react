
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SendIcon from '@mui/icons-material/Send'
import { Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

import { Dispatch } from './@types/dispatch'
import { ReduceType } from './@types/todo.type'
import reactLogo from './assets/react.svg'
import { Loading } from './components/Loading'
import { StatusEnum } from './enums/todo.enum'
import { addNewTodo } from './redux/actions/todo.action'

import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const dispatch: Dispatch = useDispatch()
  const { todoReducer: { fetching } } = useSelector((state: ReduceType) => state)

  useEffect(() => {
    // dispatch(getTodos())
    dispatch(addNewTodo({
      title: 'Saturnino',
      description: 'Saturnino',
      status: StatusEnum.PENDING,
      date: new Date().toISOString()
    }))
  }, [])

  return (
    <>
      <div>
        <Loading trigger={fetching} />
        <DatePicker label="Basic date picker" />
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src={viteLogo} className="logo" alt="Vite logo" /></a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="contained" endIcon={<SendIcon />}>
          Saturnino
        </Button>
        <p>
          Edit 
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
