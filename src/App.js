import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoComponent/>
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
  value: "Critical",
  color: "red"
}]

const ToDoComponent = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [importance, setImportance] = useState("")
  const [tasks, setTasks] = useState([])

  return (
    <div>
      <h1>ToDoComponent</h1>
      {title}
      {description}
      {importance}
      <hr/>
      {tasks.map((task)=>{
        const importance = JSON.parse(task.importance)
        return (
          <div>
            <h2>{task.title}</h2>
            
            {task.description}
            <br/>
            <span style={{color: importance.color}}>{importance.title}</span>
            <br/>
          </div>
        )
      })}
      <hr/>
      <label>Title</label>
      <input type="text" onChange={(e)=>{
        const value = e.target.value
        setTitle(value)
      }}></input>
      <br/>
      <label>Description</label>
      <input type="text" onChange={(e)=>{
        const value = e.target.value
        setDescription(value)
      }}></input>
      <br/>
      <select onChange={(e)=>{
        const value = e.target.value
        setImportance(value)
      }}>
        {importanceOptions.map((importanceOption)=>{
          return (
            <option 
              value={JSON.stringify(importanceOption)}
            >
              {importanceOption.title}
            </option>
          )
        })}
      </select>
      <br/>
      <button onClick={()=>{
        const newTask = {
          title: title,
          description: description,
          importance: importance,
        }
        const copyOfTasks = [...tasks]
        copyOfTasks.push(newTask)
        setTasks(copyOfTasks)
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
