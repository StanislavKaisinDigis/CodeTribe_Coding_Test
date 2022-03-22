import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Close } from "@mui/icons-material";
import { prevStep, step3 } from "../app/modalsSlice";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { style } from "./Step.styles";

export const Step2a = () => {
  const step = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();
  const [open, setopen] = useState(false);
  useEffect(() => {
    if (step.step === "2a") {
      setopen(true);
    } else setopen(false);
  }, [step]);
  const handleClose = () => {
    dispatch(prevStep());
  };
  const handleNextStep = () => {
    setTimeout(() => {
      dispatch(step3());
    }, 500);
  };
  const handlePrevStep = () => {
    dispatch(prevStep());
  };

  const userEmail = useAppSelector((state) => state.modals.userEmail);
  const message = useAppSelector((state) => state.modals.message);

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
            <Typography variant={"body1"} textAlign="center">
              A user with this email has not joined yet.
            </Typography>
            <TextField
              value={userEmail}
              type="email"
              placeholder={"FRIEND@EMAIL.COM"}
              disabled
              sx={{
                borderRadius: 20,
                cursor: "pointer",
              }}
            />
            <Typography variant={"caption"} textAlign="center">
              Note (optional)
            </Typography>
            <TextField
              disabled
              multiline
              rows={2}
              value={message}
              placeholder={"Hey, this is a super fun coding app. Join me."}
              sx={{
                borderRadius: 20,
                cursor: "pointer",
                mb: 2,
              }}
            />
            <Grid container>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  startIcon={<ArrowBackIosNewIcon />}
                  onClick={handlePrevStep}
                ></Button>
              </Grid>
              <Grid item xs={8}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon />}
                  fullWidth
                  onClick={handleNextStep}
                >
                  SEND
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
