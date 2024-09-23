import { createSlice } from "@reduxjs/toolkit";

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
  reducer: {
    actionA: (state) => console.log(state),
    actionB: () => {},
    actionC: () => {},
  },
});

export const { actionA, actionB, actionC } = postSlice.actions;
export default postSlice.reducer;
