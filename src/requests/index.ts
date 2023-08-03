import { ConstantsEnum } from '@/enums/todo.enum'

import { NewTodoType, TodoType, UpdateTodoType } from '@/types/todo.type'

// Recuperar todos da chave todo do localStorage
const getTodosLocalStorage = (): TodoType[] => {
  return JSON.parse(
    localStorage.getItem(ConstantsEnum.KEY_LOCAL_STORAGE) ?? '[]'
  )
}

// Salvar todos na chave todo do localStorage
const saveTodosLocalStorage = (todo: NewTodoType): UpdateTodoType => {
  const todos = getTodosLocalStorage()
  const newId = todos.length ? todos[todos.length - 1].id + 1 : 1
  const newTodo = { ...todo, id: newId }

  const updatedTodos = [...todos, newTodo]
  localStorage.setItem(
    ConstantsEnum.KEY_LOCAL_STORAGE,
    JSON.stringify(updatedTodos)
  )
  return newTodo
}

export const createNewTodo = async (
  todo: NewTodoType
): Promise<UpdateTodoType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedTodo = saveTodosLocalStorage(todo)
      resolve(updatedTodo)
    }, ConstantsEnum.FAKE_TIME_REQUEST)
  })
}

export const updateTodo = (todo: UpdateTodoType): Promise<UpdateTodoType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = getTodosLocalStorage()

      const updatedTodos = todos.map((todoItem) => {
        if (todoItem.id === todo.id) {
          return todo
        }
        return todoItem
      })

      localStorage.setItem(
        ConstantsEnum.KEY_LOCAL_STORAGE,
        JSON.stringify(updatedTodos)
      )
      resolve(updatedTodos)
    }, ConstantsEnum.FAKE_TIME_REQUEST)
  })
}

export const deleteTodo = async (id: number): Promise<UpdateTodoType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = getTodosLocalStorage()
      const updatedTodos = todos.filter((todo) => todo.id !== id)
      localStorage.setItem(
        ConstantsEnum.KEY_LOCAL_STORAGE,
        JSON.stringify(updatedTodos)
      )
      resolve(updatedTodos)
    }, ConstantsEnum.FAKE_TIME_REQUEST)
  })
}

export const getTodosStorage = async (): Promise<TodoType[]> => {
  return new Promise((resolve) => {
    const todos = getTodosLocalStorage()
    setTimeout(() => {
      resolve(todos)
    }, ConstantsEnum.FAKE_TIME_REQUEST)
  })
}
