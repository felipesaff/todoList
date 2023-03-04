import { useStateSelector } from "../../redux/hooks/useSelectors";


import { Todo } from "../Todo";
import { TodoListComponent } from "./todoList.styled"

export const TodoList = () => {
    const todos = useStateSelector(state => state.todo.todos)
    const theme = useStateSelector(state => state.theme.theme)

    return (
        <TodoListComponent theme={theme}>
            {
                todos.length > 0 ?
                todos.map((todo, i) => (
                    <Todo
                        isDone={todo.isDone}
                        id={todo.id}
                        key={i}
                        title={todo.title}
                        category={todo.category}
                        isEditModeOn={todo.isEditModeOn}
                    />
                ))
                :
                <h1>Nenhuma tarefa cadastrada...</h1>
            }
        </TodoListComponent>
    )
}