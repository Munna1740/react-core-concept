import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = ['Munna','Mowri','Saleh'];
  const department = ['Software','Software','Textile'];
  return (
    <div className="App">
      <header className="App-header">
        <h1>React JS</h1>
        <Person name={name[0]} department="Software" university="DIU"></Person>
        <Person name="Mowri" department="Software" university="DIU"></Person>
        <Person name={name[2]} department="CSE" university="DIU"></Person>
      </header>
    </div>
  );
}

function Person(props){
  
  return (
    <div style={{border:"2px solid white",margin:'10px'}}>
      <h2>Name: {props.name}</h2>
      <h2>Department: {props.department}</h2>
      <h3>{props.university}</h3>
    </div>

  );
}

export default App;
