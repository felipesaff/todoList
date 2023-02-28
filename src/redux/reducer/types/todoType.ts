export type TodoType = {
    id: string;
    title: string;
    category: string;
    isDone: boolean;
}

export type TodoActionType = {
    id: string;
    title?: string;
    category?: string;
    isDone?: boolean;
}

export type InitialStateType = {
    todos: TodoType[]
}