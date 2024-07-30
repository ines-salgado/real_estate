import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import customSpacing from "../utils/custom_spacing";
import { PageTitle, CustomTable, Links } from "../components";
import { KeyIndicatores } from "./sections";
import "./styles.scss";

function Dashboard() {
  return (
    <>
      <PageTitle title="Dashboard" />
      <Box className="pageContainer">
        <KeyIndicatores title="Real Estate Price Index" hasPercentage />
        {customSpacing}
        <CustomTable />
        {customSpacing}
        <Grid container spacing={2} direction="row">
          <Grid xs={6}>
            <CustomTable isSmallTable />
          </Grid>
          <Grid xs={6}>
            <CustomTable isSmallTable />
          </Grid>
        </Grid>
        {customSpacing}
        <Links />
        {customSpacing}
      </Box>
    </>
  );
}

export default Dashboard;
