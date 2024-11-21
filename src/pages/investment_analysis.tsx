import * as React from 'react';
import { Box } from '@mui/material';
import { PageTitle, PropertyOverview, SimpleTabs } from '../components';
import { KeyIndicatores, PurchaseTabs } from './sections';
import { InvestmentAnalysisData } from '../models';
import { calcularIndicadores } from '../utils/keys_calculator';
import jsonData from '../data/data.json';
import './styles.scss';

function InvestmentAnalysis() {
  const [propertyMarketData, setPropertyMarketData] = React.useState<
    InvestmentAnalysisData['propertyMarketData'] | null
  >(null);

  const [keyInd, setKeyInd] = React.useState<
    InvestmentAnalysisData['keyInd'] | null
  >(null);

  const propertyId = Number(window.location.hash.substring(1));

  const selectedProperty =
    propertyMarketData &&
    propertyMarketData.find(
      (property) => property.id === propertyId || 3922655141, // default property
    );

  const formatNumber = (value: number[] | number) =>
    Number.isInteger(Number(value))
      ? Number(value).toString()
      : Number(value).toFixed(2).toString();

  const [purchaseState, setPurchaseState] = React.useState({
    afterRepairValue: '155000', // price
    amountFinanced: '1240', // price * 0.8%
    closingCosts: '5000',
    financingCosts: '4000',
    otherCosts: '1000',
    downPayment: '310', // price * 0.2%
    purchaseCosts: '10000',
    rehabCosts: '2000',
    totalNeeded: '',
  });

  const [financingState, setFinancingState] = React.useState({
    loanYears: '30',
    taeg: '5',
    financedCosts: '95000',
    loanToCost: '',
    monthlyPayment: '',
    mtic: '',
  });

  const [cashFlowState, setCashFlowState] = React.useState({
    grossRent: '1242', // preço médio rent
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

  const renderPurchaseTabs = (
    activeTab: 'purchaseAndRehab' | 'financing' | 'cashFlow',
    hasPieChart: boolean,
    hasBarChart: boolean,
  ) => (
    <PurchaseTabs
      data={selectedProperty ? [selectedProperty] : []}
      activeTab={activeTab}
      purchaseState={purchaseState}
      financingState={financingState}
      cashFlowState={cashFlowState}
      handlePurchaseChange={handlePurchaseChange}
      handleFinancingChange={handleFinancingChange}
      handleCashFlowChange={handleCashFlowChange}
      formatNumber={formatNumber}
      hasPieChart={hasPieChart}
      hasBarChart={hasBarChart}
    />
  );

  const tabsData = {
    title: '',
    data: [
      {
        tabLabel: 'Purchase & Rehab',
        comp: renderPurchaseTabs('purchaseAndRehab', true, false),
      },
      {
        tabLabel: 'Financing (Purchase)',
        comp: renderPurchaseTabs('financing', false, true),
      },
      {
        tabLabel: 'Cash Flow (1 year)',
        comp: renderPurchaseTabs('cashFlow', true, false),
      },
    ],
  };

  React.useEffect(() => {
    fetch('http://127.0.0.1:5000/data')
      .then((response) => response.json())
      .then((json) => {
        setPropertyMarketData(
          json.InvestmentAnalysis?.PropertyMarketdata || null,
        );
      })
      .catch((error) => {
        setPropertyMarketData(
          (jsonData as any).InvestmentAnalysis?.PropertyMarketdata,
        );

        // window.location.origin === 'http://localhost:3000' &&
        // console.log('error: ', error);
      });
  }, []);

  React.useEffect(() => {
    const amountFinancedValue = Number(purchaseState.afterRepairValue) * 0.8;
    const downPaymentValue = Number(purchaseState.afterRepairValue) * 0.2;

    handlePurchaseChange('amountFinanced', formatNumber(amountFinancedValue));
    handlePurchaseChange('downPayment', formatNumber(downPaymentValue));
  }, [purchaseState.afterRepairValue]);

  React.useEffect(() => {
    const purchaseCostsValue =
      Number(purchaseState.closingCosts) +
      Number(purchaseState.financingCosts) +
      Number(purchaseState.otherCosts);

    handlePurchaseChange('purchaseCosts', formatNumber(purchaseCostsValue));
  }, [
    purchaseState.closingCosts,
    purchaseState.financingCosts,
    purchaseState.otherCosts,
  ]);

  React.useEffect(() => {
    const totalCashNeededValue =
      Number(purchaseState.downPayment) +
      Number(purchaseState.purchaseCosts) +
      Number(purchaseState.rehabCosts);
    handlePurchaseChange('totalNeeded', formatNumber(totalCashNeededValue));
  }, [
    purchaseState.downPayment,
    purchaseState.purchaseCosts,
    purchaseState.rehabCosts,
  ]);

  React.useEffect(() => {
    const loanToCostValue =
      Number(purchaseState.amountFinanced) /
      (Number(selectedProperty?.price) + Number(purchaseState.purchaseCosts));
    handleFinancingChange('loanToCost', formatNumber(loanToCostValue));
  }, [
    financingState.loanToCost,
    purchaseState.amountFinanced,
    purchaseState.purchaseCosts,
    selectedProperty?.price,
  ]);

  React.useEffect(() => {
    const r = Number(financingState.taeg) / 12 / 100;
    const totalMonths = Number(financingState.loanYears) * 12;
    const monthlyPaymentsValue =
      (Number(purchaseState.amountFinanced) *
        r *
        Math.pow(1 + r, totalMonths)) /
      (Math.pow(1 + r, totalMonths) - 1);

    const mticValue = monthlyPaymentsValue * totalMonths;

    handleFinancingChange('monthlyPayment', formatNumber(monthlyPaymentsValue));
    handleFinancingChange('mtic', formatNumber(mticValue));
  }, [
    financingState.loanYears,
    financingState.taeg,
    purchaseState.amountFinanced,
  ]);

  React.useEffect(() => {
    const vacancyValue = Number(cashFlowState.grossRent) * 0.08;
    handleCashFlowChange('vacancy', formatNumber(vacancyValue));

    const operationIncomeValue =
      Number(cashFlowState.grossRent) - Number(cashFlowState.vacancy);
    handleCashFlowChange('operatingIncome', formatNumber(operationIncomeValue));

    console.log(operationIncomeValue, vacancyValue);
  }, [cashFlowState.grossRent, cashFlowState.vacancy]);

  React.useEffect(() => {
    const isValue = Number(cashFlowState.grossRent) * 0.1;
    handleCashFlowChange('is', formatNumber(isValue));

    const operatingExpensesValue =
      Number(cashFlowState.imi) +
      Number(cashFlowState.is) +
      Number(cashFlowState.insurance) +
      Number(cashFlowState.condominium) +
      Number(cashFlowState.maintenance) +
      Number(cashFlowState.others);
    handleCashFlowChange(
      'operatingExpenses',
      formatNumber(operatingExpensesValue),
    );
  }, [
    cashFlowState.condominium,
    cashFlowState.grossRent,
    cashFlowState.imi,
    cashFlowState.insurance,
    cashFlowState.is,
    cashFlowState.maintenance,
    cashFlowState.others,
  ]);

  React.useEffect(() => {
    const cashFlowValue =
      Number(cashFlowState.operatingIncome) -
      Number(cashFlowState.operatingExpenses) -
      Number(cashFlowState.loanPayment);
    handleCashFlowChange('cashFlow', formatNumber(cashFlowValue));
  }, [
    cashFlowState.loanPayment,
    cashFlowState.operatingExpenses,
    cashFlowState.operatingIncome,
  ]);

  React.useEffect(() => {
    if (selectedProperty) {
      setKeyInd(
        calcularIndicadores(
          selectedProperty?.price || 0,
          Number(purchaseState.closingCosts),
          Number(purchaseState.downPayment),
          Number(purchaseState.rehabCosts),
          Number(cashFlowState.grossRent),
          Number(cashFlowState.operatingExpenses),
          Number(purchaseState.amountFinanced),
          Number(financingState.loanYears),
          Number(financingState.taeg),
          Number(cashFlowState.cashFlow) * 12,
        ),
      );
    }
  }, [
    cashFlowState.cashFlow,
    cashFlowState.grossRent,
    cashFlowState.operatingExpenses,
    financingState.loanYears,
    financingState.taeg,
    purchaseState.amountFinanced,
    purchaseState.closingCosts,
    purchaseState.downPayment,
    purchaseState.rehabCosts,
    selectedProperty,
  ]);

  return (
    <>
      <PageTitle title="Investment Analysis" />
      {propertyMarketData && (
        <Box className="pageContainer">
          <PropertyOverview selectedProperty={selectedProperty || {}} />
          <br /> <br />
          {keyInd && (
            <KeyIndicatores
              page="investment_analysis"
              title="Financial Summary / Performance Metrics"
              investmentAnalysisData={keyInd}
            />
          )}
          <br /> <br />
          <SimpleTabs tabsData={tabsData} />
          <br /> <br />
        </Box>
      )}
    </>
  );
}

export default InvestmentAnalysis;
