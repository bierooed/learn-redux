import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import reactLogo from "./assets/react.svg";

import Title from "./components/Title";
import Likes from "./components/Likes";
import Comments from "./components/Comments";

import sheldon from "./sheldor.jpg";

function App() {
  return (
    <div className="App">
      <Title />
      <img src={sheldon} />
      <Likes />
      <Comments />
    </div>
  );
}

export default App;
