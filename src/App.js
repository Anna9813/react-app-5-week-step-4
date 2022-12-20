import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return <div className="App">
    <div className="container">
    <h1>Weather App</h1> 
    <Weather />
    <footer>
      This project was coded by Hanna Soloviova and is{" "}
      <a href="https://github.com/Anna9813/react-app-5-week-step-4" target="_blank">
        open-sourced on GitHub
      </a>
  
    </footer>
  </div>
  </div>;
}

