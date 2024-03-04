import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "FirstSlice",
  initialState: {
    isMenuOpen: false,
    sugesstionList: [],
    darkMode: false,
  },
  reducers: {
    OpenMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setSuggestionList: (state, action) => {
      state.sugesstionList.push(action.payload);
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { OpenMenu, setSuggestionList, setDarkMode } = appSlice.actions;

export default appSlice.reducer;
