import { Box, CssBaseline } from "@mui/material";
import { SideDrawer } from "./components";
import Dashboard from "./pages/dashboard";
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
            <Dashboard />
          </div>
        }
      />
    </>
  );
}

export default App;
