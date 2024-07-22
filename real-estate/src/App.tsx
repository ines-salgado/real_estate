import { Box, CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SideDrawer } from "./components";
import { Dashboard, MarketAnalysis } from "./pages";
import "./App.scss";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/marketAnalysis", element: <MarketAnalysis /> },
  { path: "/investmentAnalysis", element: <h1>Investment Analysis</h1> },
  { path: "/activities", element: <h1>activities</h1> },
  { path: "/getStarted", element: <h1> get started </h1> },
  { path: "/settings", element: <h1> settings </h1> }
]);

function App() {
  return (
    <>
      <CssBaseline />
      <SideDrawer />
      <Box
        className="box"
        children={
          <div className="box__children">
            <RouterProvider router={router} />
          </div>
        }
      />
    </>
  );
}

export default App;
