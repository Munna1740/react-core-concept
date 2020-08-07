import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const productName = [
    {name:"Photoshop",price:"USD $1200"},
    {name:"LightRoom",price:"USD $1100"},
    {name:"Adobe Reader", price:"USD $100"}
];

  const familyMember = ['Moni','Anowar','Anowara','Munna','Mowri','Raju','Zinnah','Adnan','Sadia','Adil'];
  const classMates =[{name:'Minhaz',age:'24'},{name:'Rasel',age:'25'},{name:'Hasem',age:'25'}];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <h1>Family Member</h1>

        <ul>
          {
            familyMember.map(name => <li>{name}</li>)
          }
        </ul>
        {
          productName.map(pd =><Product product={pd}></Product>)
        }
        {
          classMates.map(nm =><Friends info={nm}></Friends>)
        }
      </header>
    </div>
  );
}


function Product(props){
  const productStyle ={
    color:"black",
    border:"2px solid gray",
    borderRadius:"5px",
    backgroundColor:"lightgray",
    height:"200px",
    width:"200px",
    float:"left"


  };
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  );
}


function Friends(props){
  const {name,age}=  props.info;
  return(
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
}

function Counter(){
  const[count,setCount]=useState(10);
  const handleEven = () => setCount(count+1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseOver={handleEven}>Increase</button>
      <button onClick={() =>setCount(count-1) }>Decrease</button>
    </div>
  );
}


function Users(){
  const [users,setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h1>Dynamic Data: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>

    </div>
  );
}

export default App;
