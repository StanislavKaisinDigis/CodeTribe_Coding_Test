import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Close } from "@mui/icons-material";
import { dropState, step2_1, step2_2 } from "../app/modalsSlice";
import { Grid, Stack, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import LinkIcon from "@mui/icons-material/Link";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import Snackbar from "@mui/material/Snackbar";
import { style } from "./Step.styles";

export const Step1 = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.modals);
  const [open, setopen] = useState(false);
  useEffect(() => {
    if (step.step === 1) {
      setopen(true);
    } else setopen(false);
  }, [step]);
  const handleClose = () => {
    dispatch(dropState());
  };
  const handleEmail = () => {
    dispatch(step2_1());
  };
  const handleUserName = () => {
    dispatch(step2_2());
  };
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };
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
            <Typography variant={"body1"} textAlign="center">
              How do you wanna invite?
            </Typography>
            <Button
              onClick={() => {
                handleEmail();
              }}
              variant="outlined"
              sx={{
                borderRadius: 20,
                cursor: "pointer",
                mb: 2,
                mt: 2,
              }}
              startIcon={<MailOutlineIcon />}
              endIcon={<SendIcon />}
            >
              FRIEND’S EMAIL
            </Button>
            <Button
              onClick={() => {
                handleUserName();
              }}
              startIcon={<AlternateEmailIcon />}
              endIcon={<SendIcon />}
              variant="outlined"
              sx={{
                borderRadius: 20,
                cursor: "pointer",
                mb: 2,
              }}
            >
              USERNAME
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText("codetribe.com/profile/");
                handleClickSnackbar();
              }}
              variant="outlined"
              sx={{
                borderRadius: 20,
                cursor: "pointer",
                mb: 2,
                borderBlockColor: "grey",
                color: "grey",
                textTransform: "none",
              }}
              startIcon={<LinkIcon />}
              endIcon={<ContentPasteGoIcon />}
            >
              "codetribe.com/profile/"
            </Button>
            <Typography variant={"body1"} textAlign="center">
              TIP: Copy the link above and send it to your friends.
            </Typography>
            <Snackbar
              open={openSnackbar}
              onClose={handleCloseSnackbar}
              autoHideDuration={2000}
              message="Copied!"
            />
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
