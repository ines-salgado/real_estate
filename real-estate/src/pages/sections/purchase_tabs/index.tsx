import { Unstable_Grid2 as Grid } from "@mui/material";
import { ChartDataTable, CustomPieChart } from "../../../components";

interface Props {
  hasPieChart?: boolean;
}

function PurchaseTabs(props: Props) {
  return (
    <Grid
      display="flex"
      justifyContent="space-between"
      direction="row"
      paddingTop="10px"
    >
      <ChartDataTable />
      {props.hasPieChart && <CustomPieChart />}
    </Grid>
  );
}

export default PurchaseTabs;
