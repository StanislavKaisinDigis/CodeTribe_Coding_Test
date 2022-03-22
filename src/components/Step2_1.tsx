import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Close } from "@mui/icons-material";
import { prevStep } from "../app/modalsSlice";
import {
  Grid,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import { style } from "./Step.styles";
import { fetchUserByEmail } from "../app/fetchUserByEmail";

export const Step2_1 = () => {
  const step = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();
  const [userEmail, setuserEmail] = useState("");
  const [open, setopen] = useState(false);
  useEffect(() => {
    if (step.step === "2_1") {
      setopen(true);
    } else setopen(false);
  }, [step]);
  const handleClose = () => {
    dispatch(prevStep());
  };
  const handleNextStep = () => {
    if (!userEmail.trim().length || !userEmail.includes("@")) {
      setOpenSnackbar(true);
      return;
    }
    dispatch(fetchUserByEmail({ userEmail: userEmail, message: text }));
  };
  const [text, settext] = useState("");

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
              type="email"
              placeholder={"FRIEND’S EMAIL"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: 20,
                cursor: "pointer",
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setuserEmail(e.currentTarget.value);
              }}
            />
            <Typography variant={"body1"} textAlign="center">
              Wanna add a note?
            </Typography>
            <TextField
              multiline
              rows={2}
              placeholder={"Hey, this is a super fun coding app. Join me."}
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
              message="Enter a valid FRIEND’S EMAIL!"
            />
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
