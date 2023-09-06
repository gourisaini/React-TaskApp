import Create from "Compoenets/Create";
import Show from "Compoenets/Show";
import {Component, useState} from 'react';

  const index = () => {

  const[tasks, setTasks] = useState([]);

  return(
    <div className="container mt-5 p-5 bg-light">
            {/* {Create(tasks,setTasks)} */}
            {/* <Create tasks={tasks} setTasks={setTasks} /> */}
            <Create tasks={tasks} setTasks={setTasks}>Secret info</Create>
            <hr />
            <Show tasks={tasks} setTasks={setTasks}></Show>
    </div>
  );

};

export default index;