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
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h2>Vanila redux:</h2>
          <Title />
          <img src={sheldon} />
          <Likes />
          <Comments />
        </div>

        <div>
          <h2>Redux toolkit:</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
