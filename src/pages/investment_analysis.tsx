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

  console.log(selectedProperty);

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
      hasPieChart
    />
  );

  const tabsData = {
    title: '',
    data: [
      {
        tabLabel: 'Purchase & Rehab',
        comp: renderPurchaseTabs('purchaseAndRehab'),
      },
      {
        tabLabel: 'Financing (Purchase)',
        comp: renderPurchaseTabs('financing'),
      },
      {
        tabLabel: 'Cash Flow (1 year)',
        comp: renderPurchaseTabs('cashFlow'),
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
    if (selectedProperty) {
      setKeyInd(
        calcularIndicadores(
          selectedProperty?.price, // preço da compra
          2000, // custos escritura
          selectedProperty?.price / 5, // entrada
          1000, // custos reparação
          10000, // avaliação VPT
          5000000, // valor financiado
          20, // prazo em anos
          4, // tan anual
          200, // renda mensal
          1000, // despesas mensais
        ),
      );
    }
  }, [selectedProperty]);

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
