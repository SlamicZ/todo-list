import { mockTasks } from "./__mock";
import "./App.css";
import { TodoList } from "./components";

function App() {
  return (
    <>
      <h1>To-Do List</h1>
      <TodoList initialTasks={mockTasks} />
    </>
  );
}

export default App;
