import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices";
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatReducer,
  },
});

export default store;
