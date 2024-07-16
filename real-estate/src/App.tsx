import { Box, CssBaseline } from "@mui/material";
import { SideDrawer } from "./components";
import { Dashboard, MarketAnalysis } from "./pages";
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
            <MarketAnalysis />
          </div>
        }
      />
    </>
  );
}

export default App;
