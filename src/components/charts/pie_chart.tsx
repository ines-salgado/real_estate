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
        <SquareIcon sx={{ color: '#61a2cb' }} />
        <Typography
          sx={{
            color: '#61a2cb',
            marginTop: '2px',
            fontWeight: 'bold',
          }}
        >
          Rehab Costs: {props.rehabCosts} €
        </Typography>
      </div>
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
        <SquareIcon sx={{ color: '#346584' }} />
        <Typography
          sx={{
            color: '#346584',
            marginTop: '2px',
            fontWeight: 'bold',
          }}
        >
          Down Payment: {props.downPayment} €
        </Typography>
      </div>
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
        <SquareIcon sx={{ color: '#21445c' }} />
        <Typography
          sx={{
            color: '#21445c',
            marginTop: '2px',
            fontWeight: 'bold',
          }}
        >
          Purchase Costs: {props.purchaseCosts} €
        </Typography>
      </div>
    </Grid>
  );
}

export default CustomPieChart;
