import { Box } from "@mui/material";
import customSpacing from "../../utils/custom_spacing";
import { KeyIndicatores, PageTitle, SimpleTabs } from "../../components";
import "../styles.scss";

function MarketAnalysis() {
  return (
    <>
      <PageTitle title="Market Analysis" />
      <Box className="pageContainer">
        <KeyIndicatores isSmallComp />
        {customSpacing}
        <SimpleTabs />
        {customSpacing}
      </Box>
    </>
  );
}

export default MarketAnalysis;
