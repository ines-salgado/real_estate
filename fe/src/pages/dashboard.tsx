import * as React from 'react';
import { Box, Unstable_Grid2 as Grid } from '@mui/material';
import DashboardData from '../models/dashboard';
import { PageTitle, CustomTable, Links } from '../components';
import { KeyIndicatores } from './sections';
import './styles.scss';

function Dashboard() {
  const [keys, setKeys] = React.useState<DashboardData['keyInd'] | null>(null);
  const [compTable, setCompTable] = React.useState<
    DashboardData['comparTable'] | null
  >(null);
  const [profTable, setProfTable] = React.useState<
    DashboardData['comparTable'] | null
  >(null);
  const [afforTable, setAfforTable] = React.useState<
    DashboardData['comparTable'] | null
  >(null);

  React.useEffect(() => {
    fetch('http://127.0.0.1:5000/data')
      .then((response) => response.json())
      .then((json) => {
        setKeys(json.dashboard?.KeyIndicators || null);
        setCompTable(json.dashboard?.ComparativeTable || null);
        setProfTable(json.dashboard?.profitableCities || null);
        setAfforTable(json.dashboard?.AffordabilityTable || null);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <>
      <PageTitle title="Dashboard" />
      <Box className="pageContainer">
        {keys && (
          <KeyIndicatores
            title="Real Estate Price Index"
            data={keys}
            hasPercentage
          />
        )}
        <br />
        <br />
        {compTable && <CustomTable data={compTable} />}
        <br />
        <br />
        <Grid container spacing={2} direction="row">
          <Grid xs={6}>
            {compTable && <CustomTable data={compTable} isSmallTable />}
          </Grid>
          <Grid xs={6}>
            {compTable && <CustomTable data={compTable} isSmallTable />}
          </Grid>
        </Grid>
        <br />
        <br />
        <Links />
        <br />
        <br />
      </Box>
    </>
  );
}

export default Dashboard;
