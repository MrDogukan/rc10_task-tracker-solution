import TaskCard from "./TaskCard";

const ShowTasks = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, id) => (
        <TaskCard task={task} key={id} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default ShowTasks;
