import React from "react";
import { CATEGORIES, TASKS } from "../data";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList TaskList={TASKS} />
    </div>
  );
}

export default App;
