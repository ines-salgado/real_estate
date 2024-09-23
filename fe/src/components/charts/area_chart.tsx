import { LineChart } from '@mui/x-charts/LineChart';

function AreaChart() {
  // mock data
  const data = [
    {
      x: new Date(2019, 0, 1),
      y: 2,
    },
    {
      x: new Date(2020, 0, 1),
      y: 9,
    },
    {
      x: new Date(2021, 0, 1),
      y: 10,
    },
    {
      x: new Date(2022, 0, 1),
      y: 11,
    },
    {
      x: new Date(2023, 0, 1),
      y: 6,
    },
    {
      x: new Date(2024, 0, 1),
      y: 4,
    },
  ];

  return (
    <LineChart
      height={300}
      grid={{ horizontal: true }}
      series={[
        {
          data: data.map((d) => d.y),
          area: true,
        },
      ]}
      margin={{
        top: 10,
        bottom: 20,
      }}
      yAxis={[
        {
          colorMap: {
            type: 'continuous',
            min: -10,
            max: 10,
            color: ['#beddee9c', '#1f5678'],
          },
        },
      ]}
      xAxis={[
        {
          scaleType: 'time',
          data: data.map((d) => d.x),
          valueFormatter: (value) => value.getFullYear().toString(),
          colorMap: undefined,
        },
      ]}
    />
  );
}

export default AreaChart;
