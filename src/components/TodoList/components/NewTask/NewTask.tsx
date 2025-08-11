import { useRef } from "react";
import "./style.css";

/**
 * NewTask component for adding a new task to the todo list.
 * @param addTask - Function to add a new task.
 * @returns JSX.Element
 */
export function NewTask({ addTask }: { addTask: (task: string) => void }) {
  // Reference to the input field for the new task
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to handle form submission
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const task = inputRef.current?.value.trim();
    if (task) {
      addTask(task);
    }
    inputRef.current!.value = ""; // Clear the input field after adding the task
  };

  return (
    <form className="NewTask line" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" placeholder="Add a new task" />
      <button type="submit">Add Task</button>
    </form>
  );
}
