import { Unstable_Grid2 as Grid } from "@mui/material";
import { CustomAccordion, AreaChart } from "../../../components";

function MarketDynamics() {
  return (
    <Grid display="flex" justifyContent="space-between" direction="row">
      <CustomAccordion width="55%" />
      <AreaChart />
    </Grid>
  );
}

export default MarketDynamics;
