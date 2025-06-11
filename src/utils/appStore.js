import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import connectionReducer from "./connectionSlice.js";
import feedReducer from "./feedSlice.js";
import ConnectionRequestReducer from "./connectionRequestSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    connection: connectionReducer,
    feed: feedReducer,
    request: ConnectionRequestReducer,
  },
});

export default appStore;
