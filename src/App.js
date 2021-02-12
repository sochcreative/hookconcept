import React, { useState } from 'react';
import './App.css';

const App = () => {

  let [myVal , setMyVal] = useState('Pradeep Yadav');
 const changeName = () => {
  setMyVal('Web Designer');
  
 
       
 }

  return (
    <div>
    <div>
      <h1 style={{color: "orange"}}>{ myVal }</h1>
      <button className="btn" onClick={ changeName }>Click me</button>
      </div>
    </div>
  )
}

export default App;
