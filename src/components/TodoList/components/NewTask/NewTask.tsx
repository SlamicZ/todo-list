import { useRef } from "react";
import "./style.css";

export function NewTask({ addTask }: { addTask: (task: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

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
