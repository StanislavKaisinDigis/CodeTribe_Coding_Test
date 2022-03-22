import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Close } from "@mui/icons-material";
import { prevStep, step3 } from "../app/modalsSlice";
import {
  Grid,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SendIcon from "@mui/icons-material/Send";
import { style } from "./Step.styles";
import { fetchUserByName } from "../app/fetchUserByName";

export const Step2_2 = () => {
  const step = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();
  const [open, setopen] = useState(false);
  const [userName, setuserName] = useState("");
  useEffect(() => {
    if (step.step === "2_2") {
      setopen(true);
    } else setopen(false);
  }, [step]);
  const handleClose = () => {
    dispatch(prevStep());
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [text, settext] = useState("");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleNextStep = () => {
    if (!userName.trim().length) {
      setOpenSnackbar(true);
      return;
    }
    settext(text.trim());
    dispatch(fetchUserByName({ userName: userName, message: text }));
  };

  return (
    <>
      {open ? (
        <Box sx={style}>
          <Grid container sx={{ flexDirection: "row-reverse" }}>
            <Button onClick={handleClose} endIcon={<Close />} variant="text" />
          </Grid>
          <Stack>
            <Typography variant={"h5"} textAlign="center">
              ADD A FRIEND
            </Typography>
            <TextField
              placeholder={"USERNAME"}
              value={userName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setuserName(e.currentTarget.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant={"body1"} textAlign="center">
              Wanna add a note?
            </Typography>
            <TextField
              multiline
              rows={2}
              placeholder={
                "Hey, wanna join my network? We’re in the same city."
              }
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                settext(e.currentTarget.value);
              }}
              sx={{
                borderRadius: 20,
                cursor: "pointer",
                mb: 2,
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleNextStep}
            >
              SEND
            </Button>
            <Snackbar
              open={openSnackbar}
              onClose={handleCloseSnackbar}
              autoHideDuration={2000}
              message="Enter USERNAME!"
            />
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
