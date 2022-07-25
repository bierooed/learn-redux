import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uniqId } from "uuid";

import { commentCreate } from "../../redux/actions";

import Comment from "./Comment";

export default function Comments() {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsReducer.comments);

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const addComment = () => {
    const id = uniqId();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  return (
    <div>
      <div>
        <input type="text" value={textComment} onChange={handleInput} />
        <button onClick={addComment}>Comment</button>
      </div>
      <div>
        {comments.length > 0 &&
          comments.map(({ text, id }) => <Comment key={id} text={text} />)}
      </div>
    </div>
  );
}
