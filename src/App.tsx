import './App.css'
import { AppComponent } from './app.styled'
import { Home } from './pages/Home'
import { useStateSelector } from './redux/hooks/useSelectors'

function App() {
  const theme = useStateSelector(state => state.theme.theme)

  return (
    <AppComponent theme={theme}>
      <Home />
    </AppComponent>
  )
}

export default App
