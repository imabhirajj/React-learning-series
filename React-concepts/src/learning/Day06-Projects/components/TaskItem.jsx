import { useTasks } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useTasks();

  return (
    <div className="task-item">
      <span>{task.text}</span>
      <button
        onClick={() =>
          dispatch({
            type: "DELETE_TASK",
            payload: task.id,
          })
        }
      >
        ❌
      </button>
    </div>
  );
}

export default TaskItem;
