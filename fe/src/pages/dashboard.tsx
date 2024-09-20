import * as React from 'react';
import { Box, Unstable_Grid2 as Grid } from '@mui/material';
import { PageTitle, CustomTable, Links } from '../components';
import { KeyIndicatores } from './sections';
import './styles.scss';

function Dashboard() {
  const [keys, setKeys] = React.useState(null);
  const [compTable, setCompTable] = React.useState(null);
  const [profTable, setProfTable] = React.useState(null);
  const [afforTable, setAfforTable] = React.useState(null);

  React.useEffect(() => {
    fetch('http://127.0.0.1:5000/data')
      .then((response) => response.json())
      .then((json) => {
        setKeys(json.dashboard['key indicators']);
        setCompTable(json.dashboard['comparative table']);
        setProfTable(json.dashboard['profitable cities']);
        setAfforTable(json.dashboard['Affordability table']);
        console.log(json);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <>
      <PageTitle title="Dashboard" />
      <Box className="pageContainer">
        <KeyIndicatores data={keys} hasPercentage />
        <br /> <br />
        <CustomTable />
        <br /> <br />
        <Grid container spacing={2} direction="row">
          <Grid xs={6}>
            <CustomTable isSmallTable />
          </Grid>
          <Grid xs={6}>
            <CustomTable isSmallTable />
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
