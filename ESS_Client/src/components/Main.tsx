import React from "react";
import logo from '../logo.svg';
import '../App.css';

type MainProps = {
  title?: string
}

const Main: React.FC<MainProps> = ({ title })=>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/components/Main.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {title}
        </a>
      </header>
    </div>
  );
}

Main.defaultProps = {
  title: "Title"
}

export default Main;
