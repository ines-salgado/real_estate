import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { MarketAnalysisData } from '../../models';

interface Props {
  location: string;
  selectedTab?: 'Property Market Trends' | 'Market Dynamics';
  sellAndRentData?: MarketAnalysisData['sellRentOverTime'];
  marketDynamicsData?: MarketAnalysisData['marketDynamics'];
  yAxisTitle?: string;
}

function DoubleYLineChart(props: Props) {
  const sellAndRentData =
    props.sellAndRentData && props.sellAndRentData[props.location];
  const marketDynamicsData =
    props.marketDynamicsData && props.marketDynamicsData[props.location];

  // sort by date
  const sellAndRentSortedData =
    sellAndRentData &&
    sellAndRentData.sort(
      (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime(),
    );

  const marketDynamicsSortedData =
    marketDynamicsData &&
    marketDynamicsData.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

  const dates = sellAndRentSortedData
    ? sellAndRentSortedData.map((entry) => new Date(entry.data).getTime())
    : marketDynamicsSortedData &&
      marketDynamicsSortedData.map((entry) => new Date(entry.date).getTime());

  // sellAndRentData
  const salePrices =
    sellAndRentSortedData &&
    sellAndRentSortedData.map((entry) => entry.preco_medio_venda);

  const rentPrices =
    sellAndRentSortedData &&
    sellAndRentSortedData.map((entry) => entry.preco_medio_aluguel);

  const initialSalePrices =
    salePrices &&
    salePrices.map((price, idx) =>
      idx < salePrices.length - 50 ? price : null,
    );

  const last50SalePrices =
    salePrices &&
    salePrices.map((price, idx) =>
      idx >= salePrices.length - 50 ? price : null,
    );

  const minSalePrice = salePrices && Math.min(...salePrices) * 0.95;
  const minRentPrice = rentPrices && Math.min(...rentPrices) * 0.95;
  //////////////////////

  // marketDynamicsData
  const yAxisData =
    marketDynamicsSortedData &&
    marketDynamicsSortedData.map((value) => {
      const result = Object.entries(value)
        .filter(([key2]) => key2 === props.yAxisTitle)
        .map(([_, value2]) => (typeof value2 === 'number' ? value2 : null));
      return result[0] ?? null;
    });

  const renderAxisTitles = (
    <>
      <span
        style={{
          position: 'absolute',
          top: '6%',
          left: '0%',
          fontSize: '14px',
        }}
      >
        {sellAndRentData ? 'Sale Price (€)' : props.yAxisTitle}
      </span>
      {sellAndRentData && (
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
      )}
    </>
  );

  if (
    (props.selectedTab === 'Property Market Trends' && !sellAndRentData) ||
    (props.selectedTab === 'Market Dynamics' && !marketDynamicsData)
  ) {
    return <div>No data available for this location</div>;
  }

  return (
    <Box
      sx={
        sellAndRentData
          ? { width: '100%', position: 'relative' }
          : marketDynamicsData
            ? {
                width: '70%',
                marginRight: '-25px',
                position: 'relative',
              }
            : {}
      }
    >
      {renderAxisTitles}
      <LineChart
        xAxis={[
          {
            data: dates,
            label: 'Date',
            valueFormatter: (value) => new Date(value).toLocaleDateString(),
          },
        ]}
        yAxis={
          sellAndRentSortedData
            ? [
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
              ]
            : marketDynamicsData && yAxisData
              ? [{ id: props.yAxisTitle, scaleType: 'linear' }]
              : []
        }
        series={
          sellAndRentData
            ? [
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
              ]
            : marketDynamicsData && yAxisData
              ? [
                  {
                    yAxisId: props.yAxisTitle,
                    data: yAxisData,
                    label: props.yAxisTitle || 'Data Series',
                    color: 'blue',
                  },
                ]
              : []
        }
        leftAxis={
          sellAndRentData
            ? 'salePricesAxis'
            : marketDynamicsData && props.yAxisTitle
        }
        rightAxis={sellAndRentData && 'rentPricesAxis'}
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
