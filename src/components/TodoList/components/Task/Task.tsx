import { useState } from "react";
import type { ITask } from "../../../../model";
import "./style.css";

/**
 * Task component for displaying a single task with a checkbox.
 * @param task - The task description.
 * @param done - The initial done status of the task.
 * @returns JSX.Element
 */
export function Task({ task, done }: ITask) {
  // State to manage the done status of the task
  const [doneState, setDoneState] = useState(done);

  return (
    <div className="line">
      <label>
        <input
          type="checkbox"
          checked={doneState}
          onChange={() => setDoneState(!doneState)}
        />
        <span className={`checkbox ${doneState ? "done" : ""}`}></span>
      </label>

      <span className={doneState ? "done" : ""}>{task}</span>
    </div>
  );
}
