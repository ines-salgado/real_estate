import { Box } from "@mui/material";
import customSpacing from "../utils/custom_spacing";
import {
  InvestmentCards,
  KeyIndicatores,
  PageTitle,
  SelectInput,
  SimpleTabs
} from "../components";
import "./styles.scss";

function MarketAnalysis() {
  return (
    <>
      <PageTitle title="Market Analysis" />
      <Box className="pageContainer">
        <SelectInput />
        {customSpacing}
        <KeyIndicatores
          title="Real Estate Price Index"
          isSmallComp
          hasPercentage
        />
        {customSpacing}
        <SimpleTabs />
        {customSpacing}
        <InvestmentCards />
        {customSpacing}
      </Box>
    </>
  );
}

export default MarketAnalysis;
