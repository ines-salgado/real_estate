import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { KeyIndicatores, SideDrawer } from "./components";
import "./App.scss";

function App() {
  return (
    <>
      <CssBaseline />
      <SideDrawer />
      <Box
        className="box"
        children={
          <div className="box__children">
            <KeyIndicatores />
          </div>
        }
      />
    </>
  );
}

export default App;
