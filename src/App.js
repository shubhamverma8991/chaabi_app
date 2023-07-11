import React from "react";
import Sidebar from "./comonents/sidebar/Sidebar";
import { Header } from "./comonents/header/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <Header className='header'/>
      </div>
    </div>
  );
}

export default App;
