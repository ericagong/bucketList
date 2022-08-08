import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/posts";
import comments from "../modules/comments";

const store = configureStore({
  reducer: { posts, comments },
});

export default store;
