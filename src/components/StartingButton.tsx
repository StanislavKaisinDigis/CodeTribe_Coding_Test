import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../app/hooks";
import { step1 } from "../app/modalsSlice";

export const StartingButton = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    return dispatch(step1());
  };
  return (
    <Button
      startIcon={<AddIcon color="secondary" />}
      variant="outlined"
      onClick={handleClick}
    >
      a friend
    </Button>
  );
};
