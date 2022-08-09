import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const initialState = {
  posts: [],
  isLoading: false,
  success: null,
  error: null,
  post: {},
};

// createAsyncThunk - extraReducer
export const __getPosts = createAsyncThunk(
  "posts/__getPosts",
  async (args, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// TODO 그냥 detailLayout 컴포넌트 내부에서 수행하는게 나을 것 같음.
export const __getPost = createAsyncThunk(
  "posts/__getPost",
  async (post_id, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/posts/${post_id}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __createPost = createAsyncThunk(
  "posts/__createPost",
  async (new_post, thunkAPI) => {
    try {
      console.log(new_post);
      const response = await axios.post(
        "http://localhost:3001/posts",
        new_post
      );
      const new_post_id = response.data.id;
      return thunkAPI.fulfillWithValue(new_post_id);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editPost = createAsyncThunk(
  "posts/__editPost",
  async (edit_info, thunkAPI) => {
    try {
      const { post_id, edit_post } = edit_info;
      console.log(post_id)
      const response = await axios.patch(
        `http://localhost:3001/posts/${post_id}`,
        edit_post
      );
      const edit_id = response.data.id;
      return thunkAPI.fulfillWithValue(edit_id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "posts/__deletePost",
  async (post_id, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${post_id}`);
      return thunkAPI.fulfillWithValue({ post_id });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// createSlice
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {},
  extraReducers: {
    [__getPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__createPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__createPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [__createPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [__editPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deletePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { } = postSlice.actions;
export default postSlice.reducer;
