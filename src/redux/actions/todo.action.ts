import { ActionTypesEnum } from '@/enums/todo.enum'

import { createNewTodo, getTodosStorage } from '@/requests/index'
import { Dispatch } from '@/types/dispatch'
import { NewTodoType, TodoType } from '@/types/todo.type'

// Action creator
const addTodo = (todo: NewTodoType) => ({
  type: ActionTypesEnum.ADD_TODO,
  payload: todo,
})

const setLoading = () => ({
  type: ActionTypesEnum.SET_LOADING,
})

const getAllTodos = (todos: TodoType[]) => ({
    type: ActionTypesEnum.GET_ALL_TODOS,
    payload: todos,
  })

// Criar o Redux Thunk
export const addNewTodo = (todo: NewTodoType) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading())
    const response = await createNewTodo(todo)
    dispatch(addTodo(response))
  }
}

// Criar o Redux Thunk
export const getTodos = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading())
    const response = await getTodosStorage()
    dispatch(getAllTodos(response))
  }
}
