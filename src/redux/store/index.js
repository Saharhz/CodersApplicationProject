import { configureStore } from "@reduxjs/toolkit";
import workspaceReducer from "./workSpaceSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
    theme: themeReducer,
  },
});

export default store;
