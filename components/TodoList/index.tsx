import { todos } from "../../data/datas";
import { Todo } from "../Todo";
import { TodoListComponent } from "./todoList.styled"

export const TodoList = () => {

    return (
        <TodoListComponent>
            {
                todos.length > 0 ?
                todos.map((todo, i) => (
                    <Todo
                        key={i}
                        title={todo.title}
                        category={todo.category}
                    />
                ))
                :
                <h1>Nnehuma tarefa cadastrada...</h1>
            }
        </TodoListComponent>
    )
}