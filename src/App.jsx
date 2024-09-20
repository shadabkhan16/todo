import { useSelector } from "react-redux"
import TodoList from "./components/TodoList"


function App() {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className={`${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
      <TodoList />
    </div>
  )
}

export default App
