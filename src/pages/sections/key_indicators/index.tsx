import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { DashboardData, MarketAnalysisData, PageType } from '../../../models';
import './styles.scss';

interface Props {
  page: PageType;
  title: string;
  dashboardData?: DashboardData['keyInd'];
  marketAnalysisData?: MarketAnalysisData['keyInd'];
  location?: string;
}

function KeyIndicatores(props: Props) {
  const renderKeyComponent = (
    id: number,
    keyTitle: string,
    value: number,
    percentage: number,
    date?: number,
  ) => (
    <Grid
      key={id}
      xs={
        props.page === 'dashboard' ? 3 : props.page === 'market_analysis' && 4
      }
      sx={
        props.page === 'dashboard'
          ? { width: '22%', minHeight: '110px' }
          : props.page === 'market_analysis'
            ? { width: '29.8%', minHeight: '100px' }
            : {}
      }
      className="ind__keys"
    >
      <p className="ind__keys__title">{keyTitle}</p>
      <span className="ind__keys__value">{value}</span>
      <section>
        <span className="ind__keys__percentage">{percentage?.toFixed(2)}%</span>
        {props.page === 'dashboard' && (
          <div>
            <span className="ind__keys__update">Last update: </span>
            <span className="ind__keys__date">{date}</span>
          </div>
        )}
      </section>
    </Grid>
  );

  // dashboard page
  const renderDashboardKeys =
    props.dashboardData &&
    Object.entries(props.dashboardData).map(([key, value], id) =>
      renderKeyComponent(
        id,
        key,
        value.Value,
        value['Percentage Change'],
        value.Date,
      ),
    );

  // market analysis page
  const isSameLocation: boolean | undefined =
    props.marketAnalysisData &&
    Object.keys(props.marketAnalysisData).some(
      (location: string) => location === props.location,
    );

  const renderMarketKeys =
    props.marketAnalysisData &&
    isSameLocation &&
    Object.values(props.marketAnalysisData).map((dataValue) =>
      Object.entries(dataValue).map(([key, value], id) => {
        let marketValue = Object.values(value)[0];
        let marketPercentage = Object.values(value)[1];
        return renderKeyComponent(id, key, marketValue, marketPercentage);
      }),
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
          gap="20px" // todo - smaller screens
          marginBottom="20px"
        >
          {props.page === 'dashboard' ? (
            renderDashboardKeys
          ) : props.page === 'market_analysis' ? (
            renderMarketKeys
          ) : (
            <div>No data available</div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default KeyIndicatores;
