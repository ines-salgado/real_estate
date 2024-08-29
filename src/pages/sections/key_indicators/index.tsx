import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import './styles.scss';

interface Props {
  title: string;
  isSmallComp?: boolean;
  hasPercentage?: boolean;
}

function KeyIndicatores(props: Props) {
  const GridValues = () => {
    const keyValues = (
      <Grid xs={3} className="ind__keys">
        <p className="ind__keys__title">Real Estate Price Index</p>
        <span className="ind__keys__value">212,45</span>
        <section>
          {props.hasPercentage && (
            <span className="ind__keys__percentage">+40%</span>
          )}
          <span className="ind__keys__date">last 1 year</span>
        </section>
      </Grid>
    );

    return (
      <Grid
        container
        spacing={2}
        gap="10px"
        marginBottom={props.isSmallComp ? 0 : '20px'}
      >
        {keyValues}
        {keyValues}
        {keyValues}
        {keyValues}
      </Grid>
    );
  };

  return (
    <Box className="ind">
      <Typography variant="h6" className="ind__title">
        {props.title}
      </Typography>
      <Grid className="ind__grids">
        <GridValues />
        {!props.isSmallComp && <GridValues />}
      </Grid>
    </Box>
  );
}

export default KeyIndicatores;
