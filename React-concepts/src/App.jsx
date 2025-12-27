import TaskInput from "./learning/Day06-Projects/components/TaskInput";
import TaskList from "./learning/Day06-Projects/components/TaskList";
import Timer from "./learning/Day06-Projects/components/Timer";
import { useTasks } from "./learning/Day06-Projects/context/TaskContext";

function App() {
  const { state } = useTasks();

  return (
    <div className="app">
      <h1>Focus Task Dashboard</h1>

      <Timer />
      <TaskInput />
      <TaskList tasks={state.tasks} />
    </div>
  );
}

export default App;
