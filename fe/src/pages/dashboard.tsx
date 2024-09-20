import * as React from 'react';
import { Box, Unstable_Grid2 as Grid } from '@mui/material';
import DashboardData from '../models/dashboard';
import { PageTitle, CustomTable, Links } from '../components';
import { KeyIndicatores } from './sections';
import './styles.scss';

function Dashboard() {
  const [keys, setKeys] = React.useState<DashboardData['keyInd'] | any>();
  const [compTable, setCompTable] = React.useState<
    DashboardData['comparTable'] | any
  >({});
  const [profTable, setProfTable] = React.useState<
    DashboardData['comparTable'] | any
  >({});
  const [afforTable, setAfforTable] = React.useState<
    DashboardData['comparTable'] | any
  >({});

  React.useEffect(() => {
    fetch('http://127.0.0.1:5000/data')
      .then((response) => response.json())
      .then((json) => {
        setKeys(json.dashboard.KeyIndicators);
        setCompTable(json.dashboard.ComparativeTable);
        setProfTable(json.dashboard.profitableCities);
        setAfforTable(json.dashboard.AffordabilityTable);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <>
      <PageTitle title="Dashboard" />
      <Box className="pageContainer">
        <KeyIndicatores
          title="Real Estate Price Index"
          data={keys}
          hasPercentage
        />
        <br /> <br />
        <CustomTable data={compTable} />
        <br /> <br />
        <Grid container spacing={2} direction="row">
          <Grid xs={6}>
            <CustomTable data={compTable} isSmallTable />
          </Grid>
          <Grid xs={6}>
            <CustomTable data={compTable} isSmallTable />
          </Grid>
        </Grid>
        <br /> <br />
        <Links />
        <br /> <br />
      </Box>
    </>
  );
}

export default Dashboard;
