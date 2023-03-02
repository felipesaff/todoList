import { Container } from "../../components/Container/container.styled"
import { Header } from "../../components/Header"
import { TodoContainer } from "../../components/TodoContainer/todoContainer"
import { TodoList } from "../../components/TodoList"
import { ToggleThemeComponent } from "../../components/Toggle/ToggleThemeComponent"

export const Home = () => {
    return (
        <Container>
            <ToggleThemeComponent />
            <TodoContainer>
                <Header />
                <TodoList />
            </TodoContainer>
        </Container>
    )
}