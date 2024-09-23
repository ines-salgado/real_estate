import { Box } from '@mui/material';
import { PageTitle, PropertyOverview, SimpleTabs } from '../components';
import {
  InvestmentProjections,
  KeyIndicatores,
  PurchaseTabs,
} from './sections';
import './styles.scss';

function InvestmentAnalysis() {
  const tabsData = {
    title: '',
    data: [
      {
        tabLabel: 'Purchase & Rehab',
        comp: <PurchaseTabs hasPieChart />,
      },
      {
        tabLabel: 'Financing (Purchase)',
        comp: <PurchaseTabs />,
      },
      {
        tabLabel: 'Cash Flow (1 year)',
        comp: <PurchaseTabs hasPieChart />,
      },
    ],
  };

  return (
    <>
      <PageTitle title="Investment Analysis" />
      <Box className="pageContainer">
        <PropertyOverview />
        <br /> <br />
        <KeyIndicatores
          page="investment_analysis"
          title="Financial Summary / Performance Metrics"
          isSmallComp
        />
        <br /> <br />
        <SimpleTabs tabsData={tabsData} />
        <br /> <br />
        <InvestmentProjections />
        <br /> <br />
      </Box>
    </>
  );
}

export default InvestmentAnalysis;
