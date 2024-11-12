import * as React from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { InvestmentAnalysisData } from '../../models';
import {
  PurchaseAndRehabTable,
  FinancingTable,
  CashFlowTable,
  CustomPieChart,
  CustomBarChart,
} from '../../components';

interface Props {
  data: InvestmentAnalysisData['propertyMarketData'];
  activeTab: 'purchaseAndRehab' | 'financing' | 'cashFlow';
  hasPieChart?: boolean;
  hasBarChart?: boolean;
}

function PurchaseTabs(props: Props) {
  const formatNumber = (value: number[] | number) =>
    Number.isInteger(Number(value))
      ? Number(value).toString()
      : Number(value).toFixed(2).toString();

  // purchase and rehab
  const price =
    props.data && Object.values(props.data).map((value) => value.price);

  const [purchaseState, setPurchaseState] = React.useState({
    afterRepairValue: formatNumber(price),
    amountFinanced: formatNumber(Number(price) * 0.8),
    closingCosts: '500',
    financingCosts: '400',
    otherCosts: '100',
    downPayment: formatNumber(Number(price) * 0.2),
    purchaseCosts: '1000',
    rehabCosts: '2000',
    totalNeeded: '',
  });

  const [financingState, setFinancingState] = React.useState({
    loanYears: '30',
    taeg: '5%',
    financedCosts: '950',
    loanToCost: '',
    monthlyPayment: '',
    mtic: '',
  });

  const [cashFlowState, setCashFlowState] = React.useState({
    grossRent: formatNumber(
      props.data &&
        Object.values(props.data).map((value) => value['Preço médio_rent'])[0],
    ),
    vacancy: '',
    operatingIncome: '',
    operatingExpenses: '',
    imi: '40',
    is: '',
    insurance: '30',
    condominium: '35',
    maintenance: '32',
    others: '',
    loanPayment: '300',
    cashFlow: '0',
  });

  const handlePurchaseChange = (field: string, value: string) =>
    setPurchaseState((prev) => ({ ...prev, [field]: value }));

  const handleFinancingChange = (field: string, value: string) =>
    setFinancingState((prev) => ({ ...prev, [field]: value }));

  const handleCashFlowChange = (field: string, value: string) =>
    setCashFlowState((prev) => ({ ...prev, [field]: value }));

  return (
    <Grid
      display="flex"
      justifyContent="space-between"
      direction="row"
      paddingTop="10px"
    >
      {props.activeTab === 'purchaseAndRehab' && (
        <PurchaseAndRehabTable
          {...purchaseState}
          selectedProperty={props.data}
          onChange={handlePurchaseChange}
          formatNumber={formatNumber}
        />
      )}
      {props.activeTab === 'financing' && (
        <FinancingTable
          {...purchaseState}
          {...financingState}
          selectedProperty={props.data}
          price={price}
          onChange={handleFinancingChange}
          formatNumber={formatNumber}
        />
      )}
      {props.activeTab === 'cashFlow' && (
        <CashFlowTable
          {...cashFlowState}
          selectedProperty={props.data}
          onChange={handleCashFlowChange}
          formatNumber={formatNumber}
        />
      )}
      {props.hasPieChart && (
        <CustomPieChart
          {...purchaseState}
          {...cashFlowState}
          activeTab={props.activeTab}
        />
      )}
      {props.hasBarChart && (
        <CustomBarChart
          {...purchaseState}
          {...financingState}
          {...cashFlowState}
        />
      )}
    </Grid>
  );
}

export default PurchaseTabs;
