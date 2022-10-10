import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

export const TOKEN_TIME_OUT = 600 * 1000;

const persistConfig = {
  key: "token",
  storage: persistStore,
  whitelist: ["accessToken", "refreshToken"],
};

const initialState = {
  isLogin: false,
  accessToken: null,
  expireTime: null,
  userId: null,
  userName: null,
  userRole: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, action) {
      const { accessToken, expireTime, userId, userName, userRole } =
        action.payload;
      state.isLogin = true;
      state.accessToken = accessToken;
      state.expireTime = expireTime;
      state.userId = userId;
      state.userName = userName;
      state.userRole = userRole;
    },
    removeToken(state) {
      state.isLogin = false;
      state.accessToken = null;
      state.expireTime = null;
      state.userId = null;
      state.userName = null;
      state.userRole = null;
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;