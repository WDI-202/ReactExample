import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [importance, setImportance] = useState(importanceOptions[0].value)
  const [tasks, setTasks] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <ToDoComponent
          title={title}
          setTitle={setTitle}
          description={description} 
          setDescription={setDescription}
          importance={importance} 
          setImportance={setImportance}
          tasks={tasks}
          setTasks={setTasks}
        />
      </header>
    </div>
  );
}

const importanceOptions = [{
  title: "Low",
  value: "low",
  color: "green"
}, {
  title: "Medium",
  value: "medium",
  color: "orange"
}, {
  title: "High",
  value: "high",
  color: "yellow"
}, {
  title: "Critical",
  value: "critical",
  color: "red"
}]

const ToDoTask = (props) => {
  return (
    <div style={{color: props.color}}>
      <h2>{props.title}</h2>
      {props.description}
      <br/>
    </div>
  )
}

const ToDoComponent = (props) => {
  //ToDo: Destructure args
  return (
    <div>
      <h1>ToDoComponent</h1>
      {props.tasks.map((task)=>{
        const importanceColor = importanceOptions.find((option)=>{
          return option.value === task.importance
        }).color
        return (
          <ToDoTask
            title={task.title}
            description={task.description}
            color={importanceColor}
          />
        )
      })}
      <hr/>
      <label>Title</label>
      <input type="text" value={props.title} onChange={(e)=>{
        const value = e.target.value
        props.setTitle(value)
      }}></input>
      <br/>
      <label>Description</label>
      <input type="text" value={props.description} onChange={(e)=>{
        const value = e.target.value
        props.setDescription(value)
      }}></input>
      <br/>
      <select 
        defaultValue={props.importance}
        onChange={(e)=>{
          const value = e.target.value
          console.log(value)
          props.setImportance(value)
        }}
      >
        {importanceOptions.map((importanceOption, index)=>{
          return (
            <option 
              key={`${importanceOption}-${index}`}
              value={importanceOption.value}
            >
              {importanceOption.title}
            </option>
          )
        })}
      </select>
      <br/>
      <button onClick={()=>{
        const newTask = {
          title: props.title,
          description: props.description,
          importance: props.importance,
        }
        const copyOfTasks = [...props.tasks]
        copyOfTasks.push(newTask)
        props.setTitle("")
        props.setDescription("")
        props.setTasks(copyOfTasks)
      }}>Submit</button>
    </div>
  )
}



/* 
  Rules of Components:
    1. PascalCase
    2. Return Statement With () and single enclosing html element, usually <div></div>
    3. Components can be included in other components like html elements
*/

/* const MyInfoComponent = () => {
  const [myName, setMyName] = useState("Ginny");
  const [myFavoriteColor, setMyFavoriteColor] = useState("red");
  const [favoriteMovies, setFavoriteMovies] = useState([
    "Avengers 1",
    "Avengers 3",
    "Avengers 4",
  ]);

  return (
    <div>
      <h4>Name: </h4>
      <p>{myName}</p>
      <input
        type="text"
        value={myName}
        onChange={(e) => {
          console.log(e.target.value)
          setMyName(e.target.value);
        }}
      ></input>
      <h4>Favorite Color: </h4>
      <p style={{ backgroundColor: myFavoriteColor }}>{myFavoriteColor}</p>
      <input
        type="text"
        onChange={(e) => {
          setMyFavoriteColor(e.target.value);
        }}
      ></input>
      <h4>Favorite Movies: </h4>
      <ul>
        {favoriteMovies.map((element, index) => {
          return <li key={`favorite-movie-${index}`}>{element}</li>;
        })}
      </ul>
      <ul>
        {favoriteMovies.map((element, index) => {
          return (
            <li key={`favorite-movie-input-${index}`}>
              <label>Movie {index + 1}: </label>
              <input type="text" value={favoriteMovies[index]} onChange={(e)=>{
                console.log(e.target.value)
                const updatedMovies = [favoriteMovies[0], favoriteMovies[1], favoriteMovies[2]]
                updatedMovies[index] = e.target.value
                setFavoriteMovies(updatedMovies)
              }}>
              </input>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
}; */

export default App;
