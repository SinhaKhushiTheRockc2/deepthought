import { useEffect, useState } from "react";
import style from "./Task.module.css";
import Button from "../button/Button";
// import tasks from "./task.json";
const Task = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("/task.json")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  console.log(tasks);
  return <div className={style.parentTaskContainer}>
    <div className={style.titleContainer}>
        <h3 className={style.taskRole}>Technical Project Management</h3>
        <Button btnText="Submit task"/>
    </div>
    <div className={style.taskDescContainer}>
        {tasks.map((task)=>(
            <>
            <h3 className={style.taskTitle}>{task.task_title}</h3>
            <p className={style.taskDes}>{task.task_description}</p>
            </>
        ))}
    </div>
  </div>;
};

export default Task;
