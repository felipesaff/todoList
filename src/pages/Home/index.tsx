import { Container } from "../../components/Container/container.styled"
import { Header } from "../../components/Header"
import { TodoList } from "../../components/TodoList"

export const Home = () => {
    return (
        <Container>
            <Header />
            <TodoList />
        </Container>
    )
}