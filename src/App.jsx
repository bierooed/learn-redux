import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import reactLogo from "./assets/react.svg";

import Likes from "./components/Likes";
import Title from "./components/Title";

import sheldon from "./sheldor.jpg";

function App() {
  return (
    <div className="App">
      <Title />
      <img src={sheldon} />
      <Likes />
    </div>
  );
}

export default App;
