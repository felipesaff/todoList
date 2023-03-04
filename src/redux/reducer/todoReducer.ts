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
        editTodo: (state, action: PayloadAction<TodoActionType>) => {
            const todoToEdit = state.todos.findIndex(
                todo => todo.id === action.payload.id
            );
            const newTodoState = {
                ...state.todos[todoToEdit],
                title: action.payload.title!,
                category: action.payload.category!,
                isEditModeOn: false
            };
            state.todos[todoToEdit] = newTodoState
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
        },
        turnEditModeOn: (state, action) => {
            const todoToTurnEditModeOn = state.todos.findIndex(
                todo => todo.id === action.payload.id
            );
            state.todos[todoToTurnEditModeOn].isEditModeOn = true
        },
        turnEditModeOff: (state, action: PayloadAction<TodoActionType>) => {
            const todoToTurnEditModeOn = state.todos.findIndex(
                todo => todo.id === action.payload.id
            );
            state.todos[todoToTurnEditModeOn].isEditModeOn = false
        }
    }
});

export const {
    addTodo,
    markAsDone,
    markAsUndo,
    removeTodo,
    turnEditModeOn,
    editTodo,
    turnEditModeOff
} = todo.actions

export default todo.reducer