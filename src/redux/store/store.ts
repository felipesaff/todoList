import { configureStore } from "@reduxjs/toolkit";
import themeReducer  from "../reducer/themeReducer";
import todoReducer from "../reducer/todoReducer";

const store = configureStore({
    reducer: {
        todo: todoReducer,
        theme: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store