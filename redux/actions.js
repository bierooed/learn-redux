import {
  DECREMENT,
  INCREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_DELETE,
} from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT,
  };
}

export function decrementLikes() {
  return {
    type: DECREMENT,
  };
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: {
      id,
      text,
    },
  };
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}
