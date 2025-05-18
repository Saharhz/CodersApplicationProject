import { configureStore } from "@reduxjs/toolkit";
import workspaceReducer from "./workSpaceSlice";
import themeReducer from "./themeSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});

export default store;
