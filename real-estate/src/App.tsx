import { Box, CssBaseline } from "@mui/material";
import { SideDrawer, CollapsibleTable } from "./components";
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
            <CollapsibleTable />
          </div>
        }
      />
    </>
  );
}

export default App;
