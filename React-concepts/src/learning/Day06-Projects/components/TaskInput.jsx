import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskInput() {
  const [text, setText] = useState("");
  const { dispatch } = useTasks();

  function handleAdd() {
    if (text.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: text,
    });

    setText("");
  }

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
