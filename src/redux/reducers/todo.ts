import { TodoState } from '@/interfaces/todo'

import { AnyAction } from 'redux'

const INITIAL_STATE: TodoState = {
    todos: [],
    selectedTodo: null,
    fetching: false,
}

const todoReducer = (state = INITIAL_STATE, action: AnyAction): TodoState => {
    console.log('todoReducer', action)
    return state
}

export default todoReducer