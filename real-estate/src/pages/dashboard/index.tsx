import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import {
  KeyIndicatores,
  PageTitle,
  CustomTable,
  Links
} from "../../components";
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
        <CustomTable />
        {divider}
        <Grid container spacing={2} direction="row">
          <Grid xs={6}>
            <CustomTable isSmallTable />
          </Grid>
          <Grid xs={6}>
            <CustomTable isSmallTable />
          </Grid>
        </Grid>
        {divider}
        <Links />
        {divider}
      </Box>
    </>
  );
}

export default Dashboard;
