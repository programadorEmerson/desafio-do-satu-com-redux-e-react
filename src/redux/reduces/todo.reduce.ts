import { ActionTypesEnum } from '@/enums/todo.enum'

import { GlobalStateType } from '@/types/todo.type'
import { AnyAction } from 'redux'

const INITIAL_STATE: GlobalStateType = {
  selectedTodo: null,
  todos: [],
  fetching: false,
}

export const todoReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ActionTypesEnum.SET_LOADING:
      return {
        ...state,
        fetching: true,
      }
    case ActionTypesEnum.ADD_TODO:
      return {
        ...state,
        fetching: false,
        todos: [...state.todos, action.payload],
      }
    case ActionTypesEnum.GET_ALL_TODOS:
      return {
        ...state,
        fetching: false,
        todos: action.payload,
      }
    default:
      return state
  }
}
