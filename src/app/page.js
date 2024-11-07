"use client";
//componente funcional
import React from 'react';
import styles from "./page.module.css";
import { useState } from 'react';



function Page() {

  const [priority, setPriority]=useState("");

  const [text, setText]=useState("");

  const [lista, setLista] = useState([]);

  const [tasks, setTasks] = useState({
    name: "",
    date: "",
    prority: ""
  });

  function handlePrority(event){
    setPriority(event.target.value)
  }

  function handleText(event){
    setText(event.target.value)
  }

  function addTask() {
    const newListaTareas=lista.slice();
    const newTask = {
      name: tasks.name,
      date: tasks.date,
      prority: tasks.prority,
      creadoEl: new Date().toISOString()
    }
    newListaTareas.push(newTask);
    setLista(newListaTareas);
    console.log(lista);
    setTasks({
      name:"",
      date:"",
      prority:""
    })
  }

  function handleChange(event) {
    setTasks({
      ...tasks,
      [event.target.name]: event.target.value
    });
    console.log(tasks);

  }

  return (
    <div className={styles.container}>
      <div className={styles.todoBox} >
        <h2>Todo List</h2>
        <input value={tasks.name} onChange={handleChange} type="text" placeholder="Add a new task" name='name' />
        <input type='date' name='date' onChange={handleChange} value={tasks.date} />
        <select 
        name='prority' 
        onChange={handleChange} 
        value={tasks.prority}
        >
          <option>Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask} >Add</button>

        <h3>Filters</h3>
        <input onChange={handleText} value={text} className={styles.search} placeholder='Search Task' ></input>

        <div>
          <p>Ordena por prioridad</p>
          <select className={styles.search} onChange={handlePrority} value={priority}
        >
          <option>Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        </div>

        <ul>
          {lista.filter((tasks)=>{if (priority==="") {
            return true;
          }
          return tasks.prority===priority;
        }).filter((tasks)=>tasks.name.toLowerCase().includes(text.toLowerCase())).map((task, index) => (
            <li key={index} className={styles.lis} >
              <p>{task.name}</p>
              <p>{task.date}</p>
              <p>{task.prority}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;