import * as React from 'react';
import { BarChart } from '@mui/x-charts';

const xLabels = ['Data', 'Page B'];

interface Props {
  amountFinanced: string;
  financedCosts: string;
  mtic: string;
}

function CustomBarChart(props: Props) {
  const data = [
    Number(props.financedCosts),
    Number(props.mtic),
    Number(props.amountFinanced),
  ];
  return (
    <BarChart
      series={[{ data: data, label: 'data', id: 'data', stack: 'total' }]}
      {...barParams}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}

const barParams = {
  height: 500,
  width: 500,
  slotProps: { legend: { hidden: true } },
};

export default CustomBarChart;
