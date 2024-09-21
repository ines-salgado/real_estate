import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { DashboardData } from '../../../models';
import './styles.scss';

interface Props {
  data?: DashboardData['keyInd'];
  title: string;
  isSmallComp?: boolean;
  hasPercentage?: boolean;
}

function KeyIndicatores(props: Props) {
  const GridValues = () => {
    const keyValues =
      !!props.data &&
      Object.entries(props.data).map(([key, value], id) => (
        <Grid key={id} xs={3} className="ind__keys">
          <p className="ind__keys__title">{key}</p>
          <span className="ind__keys__value">{value.Value}</span>
          <section>
            {props.hasPercentage && (
              <span className="ind__keys__percentage">
                {value['Percentage Change'].toFixed(2)}%
              </span>
            )}
            <div>
              <span className="ind__keys__update">Last update: </span>
              <span className="ind__keys__date">{value.Date}</span>
            </div>
          </section>
        </Grid>
      ));

    return (
      <Grid
        container
        spacing={2}
        gap="20px" // todo
        marginBottom={props.isSmallComp ? 0 : '20px'}
      >
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
        {/* {!props.isSmallComp && <GridValues />} */}
      </Grid>
    </Box>
  );
}

export default KeyIndicatores;
