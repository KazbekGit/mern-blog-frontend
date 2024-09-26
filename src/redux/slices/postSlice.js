import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axiosInstance.get("/posts");
  return data;
});

const initialState = {
  posts: {
    items: [],
    status: "idle",
  },

  tags: {
    items: [],
    status: "idle",
  },
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    actionA: (state) => console.log(state),
    actionB: () => {},
    actionC: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.posts.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts.status = "succeeded";
        state.posts.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.posts.status = "failed";
      });
  },
});

export const { actionA, actionB, actionC } = postSlice.actions;
export default postSlice.reducer;
