import { useTodoSelector } from "../../redux/hooks/useTodoSelector";


import { Todo } from "../Todo";
import { TodoListComponent } from "./todoList.styled"

export const TodoList = () => {
    const todos = useTodoSelector(state => state.todo.todos)

    return (
        <TodoListComponent>
            {
                todos.length > 0 ?
                todos.map((todo, i) => (
                    <Todo
                        isDone={todo.isDone}
                        id={todo.id}
                        key={i}
                        title={todo.title}
                        category={todo.category}
                    />
                ))
                :
                <h1>Nenhuma tarefa cadastrada...</h1>
            }
        </TodoListComponent>
    )
}