import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { DashboardData, MarketAnalysisData } from '../models';
import {
  PageTitle,
  SelectInput,
  SimpleTabs,
  PropertiesComparison,
  AreaChart,
} from '../components';
import { MarketDynamics, KeyIndicatores } from './sections';
import jsonData from '../data/data.json';
import './styles.scss';

function MarketAnalysis() {
  const location = useLocation();

  const [routeCity, setRouteCity] = React.useState<string>('Amadora');

  const [comparTableLocations, setComparTableLocations] = React.useState<
    DashboardData['comparTable'] | null
  >(null);

  const [keys, setKeys] = React.useState<MarketAnalysisData['keyInd'] | null>(
    null,
  );
  const [propertyMarket, setPropertyMarket] = React.useState<
    MarketAnalysisData['propertyMarketData'] | null
  >(null);
  const [marketDynamics, setMarketDynamics] = React.useState<
    MarketAnalysisData['marketDynamics'] | null
  >(null);

  React.useEffect(() => {
    fetch('http://127.0.0.1:5000/data')
      .then((response) => response.json())
      .then((json) => {
        setComparTableLocations(json.Dashboard?.ComparativeTable || null);
        setKeys(json.MarketAnalysis?.KeyIndicatorsMarket || null);
        setPropertyMarket(json.MarketAnalysis?.PropertyMarketdata || null);
        setMarketDynamics(json.MarketAnalysis?.MarketDynamics || null);
      })
      .catch((error) => {
        setComparTableLocations((jsonData as any).Dashboard?.ComparativeTable);
        setKeys((jsonData as any).MarketAnalysis?.KeyIndicatorsMarket);
        setPropertyMarket((jsonData as any).MarketAnalysis?.PropertyMarketdata);
        setMarketDynamics((jsonData as any).MarketAnalysis?.MarketDynamics);

        // window.location.origin === 'http://localhost:3000' &&
        //   console.log('error: ', error);
      });
  }, []);

  React.useMemo(() => {
    if (location.state) {
      const { city } = location.state;
      setRouteCity(city);
    }
  }, [location.state]);

  const locationOptions: string[] | null =
    comparTableLocations &&
    Object.values(comparTableLocations).map((loc) => loc.Location);

  const tabsData = {
    title: 'Market Forecasts',
    data: [
      {
        tabLabel: 'Property Market Trends',
        comp: <AreaChart />,
      },
      {
        tabLabel: 'Market Dynamics',
        comp: <MarketDynamics />,
      },
    ],
  };

  return (
    <>
      <PageTitle title="Market Analysis" />
      <Box className="pageContainer">
        <SelectInput
          label="City"
          options={locationOptions}
          routeValue={routeCity}
        />
        <br /> <br />
        {keys && (
          <KeyIndicatores
            page="market_analysis"
            title="Real Estate Price Index"
            marketAnalysisData={keys}
            location={routeCity}
          />
        )}
        <br /> <br />
        {marketDynamics && <SimpleTabs tabsData={tabsData} />}
        <br /> <br />
        {propertyMarket && (
          <PropertiesComparison data={propertyMarket} location={routeCity} />
        )}
        <br /> <br />
      </Box>
    </>
  );
}

export default MarketAnalysis;
