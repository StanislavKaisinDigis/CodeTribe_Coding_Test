import React, { useEffect } from "react";

import "./App.css";
import { StartingButton } from "./components/StartingButton";
import { ModalWindow } from "./components/ModalWindow";
import { Step1 } from "./components/Step1";
import { Step2_1 } from "./components/Step2_1";
import { Step2_2 } from "./components/Step2_2";
import { Step2a } from "./components/Step2a";
import { Step3 } from "./components/Step3";
import { useAppSelector } from "./app/hooks";
import { Snackbar } from "@mui/material";

function App() {
  const loading = useAppSelector((state) => {
    return state.modals.status;
  });
  const error = useAppSelector((state) => {
    return state.modals.error;
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  useEffect(() => {
    if (error) {
      setOpenSnackbar(true);
    } else setOpenSnackbar(false);
  }, [error]);

  return (
    <div className="App">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <StartingButton />
          {/* @ts-ignore */}
          <ModalWindow open={true} onClose={() => {}} selectedValue={""}>
            <>
              <Step1 />
              <Step2_1 />
              <Step2_2 />
              <Step2a />
              <Step3 />
            </>
          </ModalWindow>
        </>
      )}
      <>
        {error ? (
          <Snackbar
            open={openSnackbar}
            onClose={handleCloseSnackbar}
            autoHideDuration={2000}
            message={error}
          />
        ) : null}
      </>
    </div>
  );
}

export default App;
