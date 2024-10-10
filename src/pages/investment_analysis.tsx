import * as React from 'react';
import { Box } from '@mui/material';
import { PageTitle, PropertyOverview, SimpleTabs } from '../components';
import {
  InvestmentProjections,
  KeyIndicatores,
  PurchaseTabs,
} from './sections';
import { InvestmentAnalysisData } from '../models';
import jsonData from '../data/data.json';
import './styles.scss';

function InvestmentAnalysis() {
  const [propertyMarketData, setPropertyMarketData] = React.useState<
    InvestmentAnalysisData['propertyMarketData'] | null
  >(null);

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

  const tabsData = {
    title: '',
    data: [
      {
        tabLabel: 'Purchase & Rehab',
        comp: <PurchaseTabs hasPieChart />,
      },
      {
        tabLabel: 'Financing (Purchase)',
        comp: <PurchaseTabs />,
      },
      {
        tabLabel: 'Cash Flow (1 year)',
        comp: <PurchaseTabs hasPieChart />,
      },
    ],
  };

  return (
    <>
      <PageTitle title="Investment Analysis" />
      <Box className="pageContainer">
        {propertyMarketData && <PropertyOverview data={propertyMarketData} />}
        <br /> <br />
        <KeyIndicatores
          page="investment_analysis"
          title="Financial Summary / Performance Metrics"
        />
        <br /> <br />
        <SimpleTabs tabsData={tabsData} />
        <br /> <br />
        <InvestmentProjections />
        <br /> <br />
      </Box>
    </>
  );
}

export default InvestmentAnalysis;
