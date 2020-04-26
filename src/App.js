import React from 'react';
import './App.css';
import Comic from '../src/components/Comic/index'

function App() {
  return (
    <div className="App">


      <div className="title-bar">
        <div className="title-bar-text">Foreign Languages</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>

      <div className="App-text">
        <Comic/>
      </div>

      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
