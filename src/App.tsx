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
      element: (
        <img
          alt="Pudgy Penguins working on it"
          src="https://media.giphy.com/media/VHOF8pfPZOt9p018zw/giphy.gif"
          style={{ borderRadius: '20px' }}
        />
      ),
    },
    {
      path: '/settings',
      element: (
        <img
          alt="Funny Penguin working on it"
          src="https://media.giphy.com/media/551ZQUFsQ9ufdCLnPA/giphy.gif"
          style={{ borderRadius: '20px' }}
        />
      ),
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
