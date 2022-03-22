import { createAsyncThunk } from "@reduxjs/toolkit";
import { userEmails } from "../mockData";
import {
  dropLoaderStatus,
  dropState,
  loaderStatus,
  setError,
  setMessage,
  setUserEmail,
  step1,
  step2a,
  step3,
} from "./modalsSlice";

export const fetchUserByEmail = createAsyncThunk(
  "modals/fetchUser",
  async (
    {
      userEmail,
      message,
    }: {
      userEmail: string;
      message: string;
    },
    { dispatch }
  ) => {
    let isUserEmail: string | undefined;
    isUserEmail = userEmails.find((user) => {
      return user === userEmail;
    });
    try {
      const result = await new Promise((resolve, reject) => {
        dispatch(loaderStatus());
        setTimeout(() => {
          if (isUserEmail) {
            return resolve({
              user: userEmail,
              message: message,
              error: null,
              status: "resolved",
            });
          } else {
            reject({
              error: `User with email ${userEmail} is not found!`,
            });
          }
        }, 2000);
      })
        .then(() => {
          dispatch(dropLoaderStatus());
        })
        .then(() => {
          dispatch(step3());
        });
      return result;
    } catch (error) {
      Promise.resolve()
        .then(() => {
          dispatch(dropLoaderStatus());
          dispatch(setUserEmail(userEmail));
          dispatch(setMessage(message));
        })
        .then(() => {
          dispatch(step2a());
        });
    }
  }
);
