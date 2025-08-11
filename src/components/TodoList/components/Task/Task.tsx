import { useState } from "react";
import type { ITask } from "../../../../model";
import "./style.css";

export function Task(props: ITask) {
  const { task, done } = props;
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
