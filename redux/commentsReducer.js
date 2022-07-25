import { COMMENT_CREATE, COMMENT_DELETE } from "./types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log("commentsReducer - - ", action);
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case COMMENT_DELETE:
      return {
        ...state,
        comments: state.comments.filter((el) => el.id !== action.id),
      };

    default:
      return state;
  }
};
