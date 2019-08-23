import React from "react";
import NavBar from "./components/NavBar";
import WhaleFinder from "./components/WhaleFinder";

// import axios from "axios";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="row main-content">
        <WhaleFinder />
      </div>
    </div>
  );
}

export default App;
