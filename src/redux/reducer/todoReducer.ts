import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateType, TodoActionType, TodoType } from "./types/todoType";

const initialState: InitialStateType = {
    todos: []
}

const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<TodoActionType>) => {
            const newTodoList = state.todos.filter(
                todo => todo.id !== action.payload.id
            )
            state.todos = newTodoList
        },
        markAsDone: (state, action: PayloadAction<TodoActionType>) => {
            const todoToMark = state.todos.findIndex(
                todo => todo.id === action.payload.id
            );
            state.todos[todoToMark].isDone = true;
        },
        markAsUndo: (state, action: PayloadAction<TodoActionType>) => {
            const todoToMark = state.todos.findIndex(
                todo => todo.id === action.payload.id
            );
            state.todos[todoToMark].isDone = false;
        }
    }
});

export const { addTodo,markAsDone,markAsUndo,removeTodo } = todo.actions;
export default todo.reducer