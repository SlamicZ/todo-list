import { useState } from "react";
import type { ITask } from "../../model";
import { NewTask, Task } from "./components";

/**
 * TodoList component for displaying and managing a list of tasks.
 * @param initialTasks - Initial list of tasks to display.
 * @returns JSX.Element
 */
export function TodoList({ initialTasks }: { initialTasks: ITask[] }) {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState(initialTasks);

  // Function to add a new task to the list
  const addTask = (task: string) => {
    const newTask = {
      id: Date.now(),
      task,
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Render the NewTask component and the list of Task components
  return (
    <>
      <NewTask addTask={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </>
  );
}
