import { Unstable_Grid2 as Grid } from "@mui/material";
import {
  ChartDataTable,
  CustomAccordion,
  CustomPieChart
} from "../../../components";

function PurchaseAndRehab() {
  return (
    <Grid
      display="flex"
      justifyContent="space-between"
      direction="row"
      paddingTop="10px"
    >
      <ChartDataTable />
      <CustomPieChart />
    </Grid>
  );
}

export default PurchaseAndRehab;
