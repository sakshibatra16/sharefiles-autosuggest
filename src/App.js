import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShareIcon from "./components/shareSettings";
function App() {
  return (
    <div className="App">
      <h3 className="pt-5">Share Files</h3>
      <header className="App-header">
        <ShareIcon />
      </header>
    </div>
  );
}

export default App;
