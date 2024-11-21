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
  purchaseState: {
    afterRepairValue: string;
    amountFinanced: string;
    closingCosts: string;
    financingCosts: string;
    otherCosts: string;
    downPayment: string;
    purchaseCosts: string;
    rehabCosts: string;
    totalNeeded: string;
  };
  financingState: {
    loanYears: string;
    taeg: string;
    financedCosts: string;
    loanToCost: string;
    monthlyPayment: string;
    mtic: string;
  };
  cashFlowState: {
    grossRent: string;
    vacancy: string;
    operatingIncome: string;
    operatingExpenses: string;
    imi: string;
    is: string;
    insurance: string;
    condominium: string;
    maintenance: string;
    others: string;
    loanPayment: string;
    cashFlow: string;
  };
  handlePurchaseChange: any;
  handleFinancingChange: any;
  handleCashFlowChange: any;
  formatNumber: any;
  hasPieChart?: boolean;
  hasBarChart?: boolean;
}

function PurchaseTabs(props: Props) {
  const price =
    props.data && Object.values(props.data).map((value) => value.price);

  return (
    <Grid
      display="flex"
      justifyContent="space-between"
      direction="row"
      paddingTop="10px"
    >
      {props.activeTab === 'purchaseAndRehab' && (
        <PurchaseAndRehabTable
          {...props.purchaseState}
          selectedProperty={props.data}
          onChange={props.handlePurchaseChange}
        />
      )}
      {props.activeTab === 'financing' && (
        <FinancingTable
          {...props.purchaseState}
          {...props.financingState}
          selectedProperty={props.data}
          onChange={props.handleFinancingChange}
        />
      )}
      {props.activeTab === 'cashFlow' && (
        <CashFlowTable
          {...props.cashFlowState}
          selectedProperty={props.data}
          onChange={props.handleCashFlowChange}
        />
      )}
      {props.hasPieChart && (
        <CustomPieChart
          {...props.purchaseState}
          {...props.cashFlowState}
          activeTab={props.activeTab}
        />
      )}
      {props.hasBarChart && (
        <CustomBarChart
          {...props.purchaseState}
          {...props.financingState}
          {...props.cashFlowState}
          price={String(price)}
        />
      )}
    </Grid>
  );
}

export default PurchaseTabs;
