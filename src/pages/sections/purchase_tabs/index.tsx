import { Unstable_Grid2 as Grid } from '@mui/material';
import { ChartDataTable, CustomPieChart } from '../../../components';
import { InvestmentAnalysisData } from '../../../models';

interface Props {
  data: InvestmentAnalysisData['propertyMarketData'];
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
      <ChartDataTable selectedProperty={props.data} />
      {props.hasPieChart && <CustomPieChart />}
    </Grid>
  );
}

export default PurchaseTabs;
