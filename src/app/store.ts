import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import modalsReducer from "../app/modalsSlice";

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
