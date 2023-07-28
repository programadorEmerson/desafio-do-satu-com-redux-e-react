import { TodoStatus } from '@/enums/todo'

interface Todo {
    id: number;
    title: string;
    description: string;
    status: TodoStatus;
    date: string;
}

interface TodoState {
    todos: Todo[];
    selectedTodo: Todo | null;
    fetching: boolean;
}

export type { Todo, TodoState }