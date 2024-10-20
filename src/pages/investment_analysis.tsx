import * as React from 'react';
import { Box } from '@mui/material';
import { PageTitle, PropertyOverview, SimpleTabs } from '../components';
import {
  InvestmentProjections,
  KeyIndicatores,
  PurchaseTabs,
} from './sections';
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
      (property) => property.id === (propertyId || 3922655141), // default property
    );

  const tabsData = {
    title: '',
    data: [
      {
        tabLabel: 'Purchase & Rehab',
        comp: (
          <PurchaseTabs
            data={selectedProperty ? [selectedProperty] : []}
            hasPieChart
          />
        ),
      },
      {
        tabLabel: 'Financing (Purchase)',
        comp: (
          <PurchaseTabs data={selectedProperty ? [selectedProperty] : []} />
        ),
      },
      {
        tabLabel: 'Cash Flow (1 year)',
        comp: (
          <PurchaseTabs
            data={selectedProperty ? [selectedProperty] : []}
            hasPieChart
          />
        ),
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

        window.location.origin === 'http://localhost:3000' &&
          console.log('error: ', error);
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
          <InvestmentProjections />
          <br /> <br />
        </Box>
      )}
    </>
  );
}

export default InvestmentAnalysis;
