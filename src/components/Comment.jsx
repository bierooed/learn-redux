import React from "react";
import { useDispatch } from "react-redux";
import { commentDelete } from "../../redux/actions";

export default function Comment({ text, id }) {
  console.log("text --- ", text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(id);
    dispatch(commentDelete(id));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={handleDelete} style={{ marginRight: "30px" }}>
        ❌
      </button>
      <p>{text}</p>
    </div>
  );
}
