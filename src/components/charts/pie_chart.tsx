import { PieChart } from '@mui/x-charts';
import { Unstable_Grid2 as Grid } from '@mui/material';

interface Props {
  activeTab: 'purchaseAndRehab' | 'financing' | 'cashFlow';
  // purchase and rehab
  downPayment?: string;
  purchaseCosts?: string;
  rehabCosts?: string;
  // cash flow
  vacancy?: string;
  imi?: string;
  is?: string;
  insurance?: string;
  condominium?: string;
  maintenance?: string;
  others?: string;
  loanPayment?: string;
  cashFlow?: string;
}

function CustomPieChart(props: Props) {
  const purchaseAndRehabData = [
    {
      id: 0,
      value: Number(props.rehabCosts),
      color: '#61a2cb',
    },
    {
      id: 1,
      value: Number(props.downPayment),
      color: '#346584',
    },
    {
      id: 2,
      value: Number(props.purchaseCosts),
      color: '#21445c',
    },
  ];

  const cashFlowData = [
    {
      id: 0,
      value: Number(props.vacancy),
      label: 'Vacancy',
      color: '#E8C7DE',
    },
    {
      id: 1,
      value: Number(props.imi),
      label: 'IMI',
      color: '#61a2cb',
    },
    {
      id: 2,
      value: Number(props.is),
      label: 'IS',
      color: '#21445c',
    },
    {
      id: 3,
      value: Number(props.insurance),
      label: 'Insurance',
      color: '#E4D6A7',
    },
    {
      id: 4,
      value: Number(props.condominium),
      label: 'Condominium',
      color: '#478978',
    },
    {
      id: 5,
      value: Number(props.maintenance),
      label: 'Maintenance',
      color: '#9B2915',
    },
    {
      id: 6,
      value: Number(props.others),
      label: 'Others',
      color: '#50A2A7',
    },
    {
      id: 7,
      value: Number(props.loanPayment),
      label: 'Loan Payment',
      color: '#1B2021',
    },
    {
      id: 8,
      value: Number(props.cashFlow),
      label: 'Cash Flow',
      color: '#E9B44C',
    },
  ];

  return (
    <Grid height="100%" width="40%" marginRight="-8%">
      <h2 style={{ margin: '10% 8% 5%' }}>
        {props.activeTab === 'purchaseAndRehab'
          ? 'Total Cash Needed'
          : props.activeTab === 'cashFlow' && 'Income Distribution'}
      </h2>
      <PieChart
        series={[
          {
            data:
              props.activeTab === 'purchaseAndRehab'
                ? purchaseAndRehabData
                : props.activeTab === 'cashFlow'
                  ? cashFlowData
                  : [],
            innerRadius: 20,
            outerRadius: 150,
            paddingAngle: 0,
            cornerRadius: 5,
            startAngle: -180,
            endAngle: 180,
            cx: 150,
            cy: 150,
          },
        ]}
        {...pieParams}
      />
    </Grid>
  );
}

const pieParams = {
  height: 440,
  slotProps: { legend: { hidden: true } },
};

export default CustomPieChart;
