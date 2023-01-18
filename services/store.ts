import { Action, AnyAction, configureStore, Dispatch, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import loginUser from "./users/login";
import modalsReducer from "./modals"

export const store = configureStore({
  reducer: {
    login: loginUser,
    modals: modalsReducer
  }
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
