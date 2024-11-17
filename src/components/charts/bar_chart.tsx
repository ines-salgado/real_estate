import * as React from 'react';
import { BarChart } from '@mui/x-charts';

interface Props {
  price: string;
  amountFinanced: string;
  financedCosts: string;
  downPayment: string;
  mtic: string;
}

function CustomBarChart(props: Props) {
  const labels = {
    financedCosts: 'Financed Costs',
    price: 'Price',
    credit: 'Credit',
    interest: 'Interest',
  } as const;

  const addLabels = <T extends { dataKey: keyof typeof labels }>(series: T[]) =>
    series.map((item) => ({
      ...item,
      label: labels[item.dataKey],
      valueFormatter: (v: number | null) =>
        v ? `$ ${v.toLocaleString()}k` : '-',
    }));

  const balanceSheet = [
    {
      title: 'Total Costs',
      financedCosts: Number(props.financedCosts),
      price: Number(props.price),
    },
    {
      title: 'Loan Details',
      credit:
        Number(props.downPayment) +
        Number(props.amountFinanced) +
        Number(props.financedCosts),
      interest: Number(props.mtic) - Number(props.price),
    },
  ];

  return (
    <BarChart
      dataset={balanceSheet}
      series={addLabels([
        { dataKey: 'price', stack: 'total' },
        { dataKey: 'financedCosts', stack: 'total' },
        { dataKey: 'credit', stack: 'total' },
        { dataKey: 'interest', stack: 'total' },
      ])}
      xAxis={[{ scaleType: 'band', dataKey: 'title' }]}
      {...barParams}
    />
  );
}

const barParams = {
  height: 500,
  width: 500,
  slotProps: { legend: { hidden: true } },
};

export default CustomBarChart;
