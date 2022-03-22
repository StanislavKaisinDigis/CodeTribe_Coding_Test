import * as React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { dropState } from "../app/modalsSlice";
import { Backdrop, StyledModal } from "./ModalWindow.styles";

export const ModalWindow: React.FC = ({ children }) => {
  const step = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();
  let open = false;
  if (step.step !== 0) open = true;
  const handleClose = () => {
    dispatch(dropState());
  };

  return (
    <div>
      {/* @ts-ignore */}
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
      >
        {/* @ts-ignore */}
        {children}
      </StyledModal>
    </div>
  );
};
