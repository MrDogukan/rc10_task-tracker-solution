import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Delete Task
  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  // toggle
  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Home;
