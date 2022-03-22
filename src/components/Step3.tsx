import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Close } from "@mui/icons-material";
import { dropState } from "../app/modalsSlice";
import { Grid, Stack, Typography } from "@mui/material";
import { style } from "./Step.styles";

export const Step3 = () => {
  const step = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();
  const [open, setopen] = useState(false);
  useEffect(() => {
    if (step.step === 3) {
      setopen(true);
    } else setopen(false);
  }, [step]);
  const handleClose = () => {
    dispatch(dropState());
  };
  return (
    <>
      {open ? (
        <Box sx={style}>
          <Grid container sx={{ flexDirection: "row-reverse" }}>
            <Button onClick={handleClose} endIcon={<Close />} variant="text" />
          </Grid>
          <Stack>
            <Typography variant={"h6"} textAlign="center">
              YOUR INVITATION WAS SENT SUPER SUCCESSFULLY.
            </Typography>
            <Typography variant={"body1"} textAlign="center">
              You can send another.
            </Typography>
            <Button variant="contained" onClick={handleClose}>
              GOT IT
            </Button>
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
