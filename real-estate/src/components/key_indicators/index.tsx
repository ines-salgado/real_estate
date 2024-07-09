import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import "./styles.scss";

function KeyIndicatores() {
  const keyValues = (
    <Grid xs={3} className="ind__keys">
      <p className="ind__keys__title">Real Estate Price Index</p>
      <span className="ind__keys__value">212,45</span>
      <section>
        <span className="ind__keys__percentage">+40%</span>
        <span className="ind__keys__date">last 1 year</span>
      </section>
    </Grid>
  );

  return (
    <Box className="ind">
      <Grid container spacing={2} gap="8px" marginBottom="16px">
        {keyValues}
        {keyValues}
        {keyValues}
        {keyValues}
      </Grid>
      <Grid container spacing={2} gap="8px">
        {keyValues}
        {keyValues}
        {keyValues}
        {keyValues}
      </Grid>
    </Box>
  );
}

export default KeyIndicatores;
