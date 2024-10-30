import React from 'react';
import { useLocation } from 'react-router-dom';
import { Unstable_Grid2 as Grid, Box } from '@mui/material';
import { DashboardData, MarketAnalysisData } from '../models';
import {
  PageTitle,
  SelectInput,
  SimpleTabs,
  PropertiesComparison,
  CustomAccordion,
} from '../components';
import { DoubleYLineChart } from '../components/charts';
import { KeyIndicatores } from './sections';
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
  const [sellRentOvertime, setSellRentOvertime] = React.useState<
    MarketAnalysisData['sellRentOverTime'] | null
  >(null);
  const [marketDynamics, setMarketDynamics] = React.useState<
    MarketAnalysisData['marketDynamics'] | null
  >(null);

  const [yAxisTitle, setYAxisTitle] = React.useState<string>(
    '# Total evaluations by the Bank',
  );

  React.useEffect(() => {
    fetch('http://127.0.0.1:5000/data')
      .then((response) => response.json())
      .then((json) => {
        setComparTableLocations(json.Dashboard?.ComparativeTable || null);
        setKeys(json.MarketAnalysis?.KeyIndicatorsMarket || null);
        setPropertyMarket(json.MarketAnalysis?.PropertyMarketdata || null);
        setSellRentOvertime(json.MarketAnalysis?.SellAndRentOverTime || null);
        setMarketDynamics(json.MarketAnalysis?.MarketDynamics || null);
      })
      .catch((error) => {
        setComparTableLocations((jsonData as any).Dashboard?.ComparativeTable);
        setKeys((jsonData as any).MarketAnalysis?.KeyIndicatorsMarket);
        setPropertyMarket((jsonData as any).MarketAnalysis?.PropertyMarketdata);
        setSellRentOvertime(
          (jsonData as any).MarketAnalysis?.SellAndRentOverTime,
        );
        setMarketDynamics((jsonData as any).MarketAnalysis?.MarketDynamics);

        window.location.origin === 'http://localhost:3000' &&
          console.log('error: ', error);
      });
  }, []);

  React.useEffect(() => {
    if (location.state) {
      const { city } = location.state;
      setRouteCity(city);
    }
  }, [location.state]);

  // for select input
  const locationOptions: string[] | null =
    comparTableLocations &&
    Object.values(comparTableLocations).map((loc) => loc.Location);

  const tabsData = {
    title: 'Market Forecasts',
    data: [
      {
        tabLabel: 'Property Market Trends',
        comp: sellRentOvertime && marketDynamics && (
          <DoubleYLineChart
            location={routeCity}
            selectedTab="Property Market Trends"
            sellAndRentData={sellRentOvertime}
            marketDynamicsData={marketDynamics}
          />
        ),
      },
      {
        tabLabel: 'Market Dynamics',
        comp: marketDynamics && (
          <Grid
            display="flex"
            justifyContent="space-between"
            direction="row"
            gap="20px"
          >
            <CustomAccordion
              location={routeCity}
              marketDynamicsData={marketDynamics}
              setYAxisTitle={setYAxisTitle}
            />
            <DoubleYLineChart
              location={routeCity}
              selectedTab="Market Dynamics"
              marketDynamicsData={marketDynamics}
              yAxisTitle={yAxisTitle}
            />
          </Grid>
        ),
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
          setRouteValue={setRouteCity}
        />
        <br /> <br />
        {keys && (
          <KeyIndicatores
            page="market_analysis"
            title="Real Estate Price Index"
            location={routeCity}
            marketAnalysisData={keys}
          />
        )}
        <br /> <br />
        <SimpleTabs tabsData={tabsData} />
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
