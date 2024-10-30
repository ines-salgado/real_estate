import { PieChart } from '@mui/x-charts';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';

interface Props {
  downPayment: string;
  purchaseCosts: string;
  rehabCosts: string;
}

function CustomPieChart(props: Props) {
  const data = [
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

  const renderLegend = (color: string, value: string) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        marginTop: '16px',
        marginLeft: '50px',
      }}
    >
      <SquareIcon sx={{ color: color }} />
      <Typography
        sx={{
          color: color,
          marginTop: '2px',
          fontWeight: 'bold',
        }}
      >
        {value} €
      </Typography>
    </div>
  );

  return (
    <Grid height="100%" width="47%" marginRight="-8%">
      <PieChart
        series={[
          {
            data: data,
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
        height={330}
      />
      {renderLegend('#61a2cb', `Rehab Costs: ${props.rehabCosts}`)}
      {renderLegend('#346584', `Down Payment: ${props.downPayment}`)}
      {renderLegend('#21445c', `Purchase Costs: ${props.purchaseCosts}`)}
    </Grid>
  );
}

export default CustomPieChart;
