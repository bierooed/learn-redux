import React from "react";

export default function Comment({ text, id }) {
  console.log("text --- ", text);
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
