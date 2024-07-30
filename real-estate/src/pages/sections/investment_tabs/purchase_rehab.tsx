import { Unstable_Grid2 as Grid } from "@mui/material";
import { CustomAccordion, CustomPieChart } from "../../../components";

function PurchaseAndRehab() {
  return (
    <Grid
      display="flex"
      justifyContent="space-between"
      direction="row"
      paddingTop="10px"
    >
      <CustomAccordion width="45%" />
      <CustomPieChart />
    </Grid>
  );
}

export default PurchaseAndRehab;
