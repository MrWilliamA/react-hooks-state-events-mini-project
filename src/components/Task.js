import React from "react";

function Task({ tasks }) {
  console.log(tasks);
  const taskCollection = tasks.map((task) => {
    return (
      <div className="task">
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
        <button className="delete">X</button>
      </div>
    );
  });
  return taskCollection;
}

export default Task;
