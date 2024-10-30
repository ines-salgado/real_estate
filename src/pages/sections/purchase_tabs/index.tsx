import * as React from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { ChartDataTable, CustomPieChart } from '../../../components';
import { InvestmentAnalysisData } from '../../../models';

interface Props {
  data: InvestmentAnalysisData['propertyMarketData'];
  hasPieChart?: boolean;
}

function PurchaseTabs(props: Props) {
  const price =
    props.data && Object.values(props.data).map((value) => value.price);

  const [downPayment, setDownPayment] = React.useState<string>(
    Number.isInteger(Number(price) * 0.2)
      ? (Number(price) * 0.2).toString()
      : (Number(price) * 0.2).toFixed(2).toString(),
  );
  const [purchaseCosts, setPurchaseCosts] = React.useState<string>('1000');
  const [rehabCosts, setRehabCosts] = React.useState<string>('2000');

  return (
    <Grid
      display="flex"
      justifyContent="space-between"
      direction="row"
      paddingTop="10px"
    >
      <ChartDataTable
        selectedProperty={props.data}
        downPayment={downPayment}
        purchaseCosts={purchaseCosts}
        rehabCosts={rehabCosts}
        setDownPayment={setDownPayment}
        setPurchaseCosts={setPurchaseCosts}
        setRehabCosts={setRehabCosts}
      />
      {props.hasPieChart && (
        <CustomPieChart
          downPayment={downPayment}
          purchaseCosts={purchaseCosts}
          rehabCosts={rehabCosts}
        />
      )}
    </Grid>
  );
}

export default PurchaseTabs;
