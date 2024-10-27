import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { MarketAnalysisData } from '../../models';

interface Props {
  location: string;
  selectedTab?: 'Property Market Trends' | 'Market Dynamics';
  sellAndRentData?: MarketAnalysisData['sellRentOverTime'];
  marketDynamicsData?: MarketAnalysisData['marketDynamics'];
}

function DoubleYLineChart(props: Props) {
  const sellAndRentData =
    props.sellAndRentData && props.sellAndRentData[props.location];
  const marketDynamicsData =
    props.marketDynamicsData && props.marketDynamicsData[props.location];

  if (
    (props.selectedTab === 'Property Market Trends' && !sellAndRentData) ||
    (props.selectedTab === 'Market Dynamics' && !marketDynamicsData)
  ) {
    return <div>No data available for this location</div>;
  }

  const sortedData = () => {
    const dateCompar = (date1: string, date2: string) =>
      new Date(date1).getTime() - new Date(date2).getTime();

    return sellAndRentData
      ? sellAndRentData.sort((a, b) => dateCompar(a.data, b.data))
      : [];
  };

  const dates = sortedData().map((entry) => new Date(entry.data).getTime());
  const salePrices = sortedData().map((entry) => entry.preco_medio_venda);
  const rentPrices = sortedData().map((entry) => entry.preco_medio_aluguel);

  const initialSalePrices = salePrices.map((price, idx) =>
    idx < salePrices.length - 50 ? price : null,
  );

  const last50SalePrices = salePrices.map((price, idx) =>
    idx >= salePrices.length - 50 ? price : null,
  );

  const minSalePrice = Math.min(...salePrices) * 0.95;
  const minRentPrice = Math.min(...rentPrices) * 0.95;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '6%',
          left: '0%',
          fontSize: '14px',
        }}
      >
        Sale Price (€)
      </span>
      <span
        style={{
          position: 'absolute',
          top: '6%',
          right: '2%',
          fontSize: '14px',
        }}
      >
        Rent Price (€)
      </span>
      <LineChart
        xAxis={[
          {
            data: dates,
            label: 'Date',
            valueFormatter: (value) => new Date(value).toLocaleDateString(),
          },
        ]}
        yAxis={[
          {
            id: 'salePricesAxis',
            scaleType: 'linear',
            min: minSalePrice,
          },
          {
            id: 'rentPricesAxis',
            scaleType: 'linear',
            min: minRentPrice,
          },
        ]}
        series={[
          {
            yAxisId: 'salePricesAxis',
            data: initialSalePrices,
            label: 'Sale Prices',
            color: 'blue',
          },
          {
            yAxisId: 'salePricesAxis',
            data: last50SalePrices,
            label: 'Predicted Sale Prices',
            color: 'red',
          },
          {
            yAxisId: 'rentPricesAxis',
            data: rentPrices,
            label: 'Rent Prices',
            color: 'green',
          },
        ]}
        leftAxis="salePricesAxis"
        rightAxis="rentPricesAxis"
        height={500}
        sx={{
          margin: '17px',
          marginLeft: '-8px',
        }}
      />
    </Box>
  );
}

export default DoubleYLineChart;
