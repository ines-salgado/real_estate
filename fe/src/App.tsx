import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { SideDrawer } from './components';
import { Dashboard, InvestmentAnalysis, MarketAnalysis } from './pages';
import './App.scss';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Dashboard /> },
    { path: '/market-analysis', element: <MarketAnalysis /> },
    {
      path: '/investment-analysis',
      element: <InvestmentAnalysis />,
    },
    {
      path: '/get-started',
      element: <h1>work in progress...</h1>,
    },
    {
      path: '/settings',
      element: <h1>work in progress...</h1>,
    },
  ]);

  return (
    <>
      <CssBaseline />
      <SideDrawer />
      <Box
        className="app"
        children={
          <div className="app__children">
            <RouterProvider router={router} />
          </div>
        }
      />
    </>
  );
}

export default App;
