import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { DashboardData, MarketAnalysisData, PageType } from '../../../models';
import './styles.scss';

interface Props {
  page: PageType;
  title: string;
  dashboardData?: DashboardData['keyInd'];
  marketAnalysisData?: MarketAnalysisData['keyInd'];
  location?: string;
  isSmallComp?: boolean;
  hasPercentage?: boolean;
}

function KeyIndicatores(props: Props) {
  const renderKeyValues = (
    id: number,
    key: string,
    value: string | number,
    hasSection: boolean,
    percentageValue?: number,
    dateValue?: number,
  ) => (
    <Grid
      key={id}
      xs={3}
      sx={
        props.page === 'dashboard'
          ? { width: '22%', minHeight: '110px' }
          : props.page === 'market_analysis'
            ? { width: '14.3%', minHeight: '100px' }
            : {}
      }
      className="ind__keys"
    >
      <p className="ind__keys__title">{key}</p>
      <span className="ind__keys__value">{value}</span>
      {!!hasSection && (
        <section>
          {props.hasPercentage && (
            <span className="ind__keys__percentage">
              {percentageValue?.toFixed(2)}%
            </span>
          )}
          <div>
            <span className="ind__keys__update">Last update: </span>
            <span className="ind__keys__date">{dateValue}</span>
          </div>
        </section>
      )}
    </Grid>
  );

  const isSameLocation: boolean | undefined =
    props.marketAnalysisData &&
    Object.keys(props.marketAnalysisData).some(
      (location: string) => location === props.location,
    );

  return (
    <Box className="ind">
      <Typography variant="h6" className="ind__title">
        {props.title}
      </Typography>
      <Grid className="ind__grids">
        <Grid
          container
          spacing={2}
          gap="20px" // todo
          marginBottom={props.isSmallComp ? 0 : '20px'}
        >
          {props.dashboardData ? (
            Object.entries(props.dashboardData).map(([key, value], id) =>
              renderKeyValues(
                id,
                key,
                value.Value,
                true,
                value['Percentage Change'],
                value.Date,
              ),
            )
          ) : props.marketAnalysisData && isSameLocation ? (
            Object.values(props.marketAnalysisData).map((values) =>
              Object.entries(values).map(([key, value], id) =>
                renderKeyValues(id, key, value, false),
              ),
            )
          ) : (
            <div>No data available</div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default KeyIndicatores;
