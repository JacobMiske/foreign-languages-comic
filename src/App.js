import React from 'react';
import './App.css';
import Comic from '../src/components/Comic/index'

function App() {
  return (
    <div className="App">
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Foreign Languages</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>

        <header className="App-header">
          <p>
            A Web Comic About Learning Something New
          </p>
        </header>

        <Comic/>

        <header className="App-header">
          <a className="App-link" href="https://jacobmiske.com" target="_blank"rel="noopener noreferrer">
            My Blog
          </a>
        </header>

      </div>
    </div>
  );
}

export default App;
