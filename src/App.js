import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfoComponent />
        
      </header>
    </div>
  );
}

/* 
  Rules of Components:
    1. PascalCase
    2. Return Statement With () and single enclosing html element, usually <div></div>
    3. Components can be included in other components like html elements
*/

const MyInfoComponent = () => {

  const [myAge, setMyAge] = useState(0)
  const [myFavoriteColor, setMyFavoriteColor] = useState("red") 

  const myName = "Ginny";
  const favoriteMovies = ["Avengers 1", "Avengers 3", "Avengers 4"];
  return (
    <div>
      <p>{myName}</p>
      <p style={{backgroundColor: myFavoriteColor}}>{myFavoriteColor}</p>
      <p>
        {favoriteMovies}
      </p>
      <p>I am {myAge} years old</p>
      <button onClick={()=>{
        setMyAge(myAge + 1)
        console.log(myAge)
      }}>
        +
      </button>
      <input type="text" onChange={(event)=>{
        const value = event.target.value;
        setMyFavoriteColor(value)
      }}></input>
    </div>
  );
}

export default App;
