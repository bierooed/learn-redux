import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import reactLogo from "./assets/react.svg";

import Title from "./components/Title";
import Likes from "./components/Likes";
import Comments from "./components/Comments";

import sheldon from "./sheldor.jpg";
import { decrement, increment } from "../redux-toolkit/toolkitSlice";

function App() {
  const count = useSelector((state) => state.toolkit.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        {/* <div>
          <h2>Vanila redux:</h2>
          <Title />
          <img src={sheldon} />
          <Likes />
          <Comments />
        </div> */}

        <div>
          <h2>Redux toolkit:</h2>
          <button onClick={() => dispatch(increment())}>+</button>
          <p>Count: {count}</p>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
