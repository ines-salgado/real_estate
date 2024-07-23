import { Box, CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SideDrawer } from "./components";
import { Dashboard, MarketAnalysis } from "./pages";
import "./App.scss";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/market-analysis", element: <MarketAnalysis /> },
    { path: "/investment-analysis", element: <h1>Investment Analysis</h1> },
    { path: "/activities", element: <h1>Activities</h1> },
    { path: "/get-started", element: <h1>Get Started</h1> },
    { path: "/settings", element: <h1>Settings</h1> }
  ]);

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
