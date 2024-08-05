import { pieArcLabelClasses, PieChart } from "@mui/x-charts";
import { Unstable_Grid2 as Grid } from "@mui/material";

function CustomPieChart() {
  const data = [
    { id: 0, value: 10, color: "#61a2cb" },
    { id: 1, value: 15, color: "#346584" },
    { id: 2, value: 20, color: "#21445c" }
  ];

  return (
    <Grid height="100%" width="47%" marginRight="-8%">
      <PieChart
        series={[
          {
            data: data,
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 45,
            innerRadius: 20,
            outerRadius: 150,
            paddingAngle: 0,
            cornerRadius: 5,
            startAngle: -180,
            endAngle: 180,
            cx: 150,
            cy: 150
          }
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold"
          }
        }}
        height={330}
      />
    </Grid>
  );
}

export default CustomPieChart;
