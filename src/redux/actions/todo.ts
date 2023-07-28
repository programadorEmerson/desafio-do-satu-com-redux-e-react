import { ActionType } from '@/enums/todo'

import { Todo } from '@/interfaces/todo'

export const newTask = (task: Todo) => ({
    type: ActionType.ADD_TODO,
    payload: task,
  })