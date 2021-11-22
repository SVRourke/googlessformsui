import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  username: "",
  userId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // call api with action info
      // set state with return info
    },
    logout: (state) => {
      // make api call
      // set state to initialstate
    },
    create: (state, action) => {
      // send api call with action info
    },
    deleteUser: (state) => {
      // make api call
      // set state initial state
    },
  },
});

export const { login, logout, create, deleteUser } = userSlice.actions;

export default userSlice.reducer;
