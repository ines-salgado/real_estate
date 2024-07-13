import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import { KeyIndicatores, PageTitle, SimpleTable } from "../../components";
import "./styles.scss";

function Dashboard() {
  const divider = (
    <>
      <br /> <br />
    </>
  );

  return (
    <>
      <PageTitle title="Dashboard" />
      <Box className="dashboard">
        <KeyIndicatores />
        {divider}
        <SimpleTable />
        {divider}
        <Grid container spacing={2} direction="row">
          <Grid xs={6}>
            <SimpleTable />
          </Grid>
          <Grid xs={6}>
            <SimpleTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
