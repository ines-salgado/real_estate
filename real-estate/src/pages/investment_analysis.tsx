import { Box } from "@mui/material";
import customSpacing from "../utils/custom_spacing";
import { PageTitle } from "../components";
import { PropertyOverview, KeyIndicatores } from "../sections";
import "./styles.scss";

function InvestmentAnalysis() {
  return (
    <>
      <PageTitle title="Investment Analysis" />
      <Box className="pageContainer">
        <PropertyOverview />
        {customSpacing}
        <KeyIndicatores
          title="Financial Summary / Performance Metrics"
          isSmallComp
        />
        {customSpacing}
      </Box>
    </>
  );
}

export default InvestmentAnalysis;
