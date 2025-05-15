import { configureStore } from "@reduxjs/toolkit";
import workspaceReducer from "./workSpaceSlice";

const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
  },
});

export default store;
