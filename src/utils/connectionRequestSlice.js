import { createSlice } from "@reduxjs/toolkit";

const connectionRequest = createSlice({
  name: "connectionRequest",
  initialState: [],
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newArray = state.filter((r) => r._id !== action.payload);
      return newArray;
    },
  },
});

export const { addRequest, removeRequest } = connectionRequest.actions;

export default connectionRequest.reducer;
