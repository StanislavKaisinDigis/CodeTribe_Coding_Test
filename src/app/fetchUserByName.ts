import { createAsyncThunk } from "@reduxjs/toolkit";
import { userNames } from "../mockData";
import {
  dropLoaderStatus,
  dropState,
  loaderStatus,
  setError,
  step1,
  step3,
} from "./modalsSlice";

export const fetchUserByName = createAsyncThunk(
  "modals/fetchUser",
  async (
    {
      userName,
      message,
    }: {
      userName: string;
      message: string;
    },
    { dispatch }
  ) => {
    let isUserName: string | undefined;
    isUserName = userNames.find((user) => {
      return user === userName;
    });
    try {
      const result = await new Promise((resolve, reject) => {
        dispatch(loaderStatus());
        setTimeout(() => {
          if (isUserName) {
            return resolve({
              user: userName,
              message: message,
              error: null,
              status: "resolved",
            });
          } else {
            reject({
              error: `User with name ${userName} is not found!`,
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
          dispatch(step1());
        })
        .then(() => {
          dispatch(setError(error));
        })
        .then(() => {
          setTimeout(() => {
            dispatch(dropState());
          }, 2000);
        });
    }
  }
);
