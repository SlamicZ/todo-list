import { useState } from "react";
import type { ITask } from "../../model";
import { NewTask, Task } from "./components";

export function TodoList({ initialTasks }: { initialTasks: ITask[] }) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task: string) => {
    const newTask = {
      id: Date.now(),
      task,
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <>
      <NewTask addTask={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </>
  );
}
