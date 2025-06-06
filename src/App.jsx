import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://valor-software.com/" target="_blank" rel="noreferrer">
          <img
            src="https://valor-software.com/assets/QJVYZQIc-valor-software.webp"
            alt="random"
            style={{ width: "150px", height: "80px" }}
          />
        </a>
      </div>
      <h1>Remote MF App</h1>
	  <div>
          <a
            className="link"
            href="https://github.com/joaosoutto/valor-remote"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
              alt="github"
              style={{ width: "40px", height: "40px" }}
            />
            Check Remote App Github Repo
          </a>
        </div>
    </div>
  );
}

export default App;
