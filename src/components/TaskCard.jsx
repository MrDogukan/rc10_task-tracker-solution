import React from "react";
import { FaTimes } from "react-icons/fa";

const TaskCard = ({ task, deleteTask }) => {
  console.log(task);
  return (
    <div className="task">
      <h3>
        {task.task}
        <FaTimes onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default TaskCard;
