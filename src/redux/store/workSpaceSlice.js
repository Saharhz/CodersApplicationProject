import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "javascript",
  fontSize: 14,
};

export const workSpaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { setLanguage, setFontSize } = workSpaceSlice.actions;
export default workSpaceSlice.reducer;
