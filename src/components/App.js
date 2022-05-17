import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  let handleDeleteTask = (taskText) => {
    // console.log("delete task is called!");
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
