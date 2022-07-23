import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../../redux/actions";
import { inputReducer } from "../../redux/inputReducer";

export default function Title() {
  const text = useSelector((state) => state.inputReducer.text);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log("handle text - ", e.target.value);
    dispatch(inputText(e.target.value));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <div>
        <p>{text}</p>
        <input type="text" onChange={handleChange} placeholder="title" />
      </div>
    </div>
  );
}
