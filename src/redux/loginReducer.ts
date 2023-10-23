import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface LoginState {
  isAuth: boolean;
  username: string;
}

const initialState: LoginState = {
  isAuth: false,
  username: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      state.isAuth = true;
    },
  },
});

export const { login } = loginSlice.actions;

export const getAuthInfo = (state: RootState) => state.login;

export default loginSlice.reducer;
