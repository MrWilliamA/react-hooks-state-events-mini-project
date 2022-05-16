import Task from "./Task";
function TaskList({ TaskList }) {
  // const taskCollection = TaskList.map((task) => {
  return (
    <Task tasks={TaskList} />
    // <li key={task.key}>
    //   {task.text} - {task.category}
    // </li>
  );
  // }
  // );

  // return <p>{taskCollection}</p>;
}

export default TaskList;
