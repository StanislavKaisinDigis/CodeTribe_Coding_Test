import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
  step: number | string;
  status: null | "loading" | "resolved" | "rejected";
  error: null | string;
  userName: string;
  userEmail: string;
  message: string;
}

const initialState: IModalState = {
  step: 0,
  status: null,
  error: null,
  userName: "",
  userEmail: "",
  message: "",
};

export interface IPayload {
  error: string;
  message: string;
  status: string;
  userName_Email: string;
}

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    step1: (state) => {
      state.step = 1;
    },
    step2_1: (state) => {
      state.step = "2_1";
    },
    step2_2: (state) => {
      state.step = "2_2";
    },
    step2a: (state) => {
      state.step = "2a";
    },
    step3: (state) => {
      state.step = 3;
    },
    dropState: (state) => {
      state.error = null;
      state.message = "";
      state.status = null;
      state.step = 0;
      state.userName = "";
      state.userEmail = "";
    },
    prevStep: (state) => {
      switch (state.step) {
        case "2_1":
          state.step = 1;
          break;
        case "2_2":
          state.step = 1;
          break;
        case "2a":
          state.step = 1;
          break;
        default:
          break;
      }
    },
    loaderStatus: (state) => {
      state.status = "loading";
    },
    dropLoaderStatus: (state) => {
      state.status = null;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    dropEroor: (state) => {
      state.error = null;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    dropUserEmail: (state, action) => {
      state.userEmail = "";
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    dropMessage: (state) => {
      state.message = "";
    },
  },
});

export const {
  step1,
  step2_1,
  step2_2,
  step2a,
  step3,
  dropState,
  prevStep,
  loaderStatus,
  dropLoaderStatus,
  setError,
  dropEroor,
  setUserEmail,
  dropUserEmail,
  setMessage,
  dropMessage,
} = modalsSlice.actions;

export default modalsSlice.reducer;
