import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import {
  DashboardData,
  InvestmentAnalysisData,
  MarketAnalysisData,
  PageType,
} from '../../models';
import './styles.scss';

interface Props {
  page: PageType;
  title: string;
  location?: string;
  dashboardData?: DashboardData['keyInd'];
  marketAnalysisData?: MarketAnalysisData['keyInd'];
  investmentAnalysisData?: InvestmentAnalysisData['keyInd'];
}

function KeyIndicatores(props: Props) {
  const renderKeyComponent = (
    id: number,
    keyTitle: string,
    value: number | null,
    hasPercentageSimbol: boolean,
    hasEuroSimbol: boolean,
    hasPercentage?: boolean,
    percentage?: number,
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
            : props.page === 'investment_analysis'
              ? {
                  width: '17.2%',
                  padding: '20px !important',
                  textAlign: 'center',
                }
              : {}
      }
      className="ind__keys"
    >
      <p className="ind__keys__title" style={{ marginBottom: '5px' }}>
        {keyTitle}
      </p>
      <span className="ind__keys__value">
        {Number.isInteger(value) ? value : value && value.toFixed(2)}
        {hasPercentageSimbol ? ' %' : hasEuroSimbol && ' €'}
      </span>
      <section>
        {hasPercentage && (
          <span className="ind__keys__percentage">
            {percentage?.toFixed(2)}%
          </span>
        )}
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
        false,
        false,
        true,
        value['Percentage Change'],
        value.Date,
      ),
    );

  // market analysis page
  const renderMarketKeys =
    props.marketAnalysisData &&
    Object.entries(props.marketAnalysisData).map(
      ([dataKey, dataValue]) =>
        dataKey === props.location &&
        Object.entries(dataValue).map(([key, value], id) => {
          let marketValue = Object.values(value)[0];
          let marketPercentage = Object.values(value)[1];
          return renderKeyComponent(
            id,
            key,
            marketValue,
            false,
            false,
            true,
            marketPercentage,
          );
        }),
    );

  const renderInvestmentKeys =
    props.investmentAnalysisData &&
    Object.entries(props.investmentAnalysisData).map(([key, value], id) =>
      renderKeyComponent(
        id,
        key,
        value,
        key === 'ROI',
        key === 'Cash Flow' ||
          key === 'Cash on Cash' ||
          key === 'Initial Capital',
      ),
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
          ) : props.page === 'investment_analysis' ? (
            renderInvestmentKeys
          ) : (
            <div>No data available</div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default KeyIndicatores;
