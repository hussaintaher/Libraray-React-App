import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './styles/App.css';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `number is ${count}`
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Libraraies</h1>
        <div className="navsContainer">
          <div className='nav1'>
            <Link style={{fontSize: '20px', color: 'orange'}} to="/FunctionalComponent">Books | Functional Component</Link>
          </div>
          <div className='nav2'>
            <Link style={{fontSize: '20px', color: 'orange'}} to="/ClassComponent">Books | Class Component</Link>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
