import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import customSpacing from "../../utils/custom_spacing";
import { KeyIndicatores, PageTitle } from "../../components";
import "../styles.scss";

function MarketAnalysis() {
  return (
    <>
      <PageTitle title="Market Analysis" />
      <Box className="pageContainer">
        <KeyIndicatores isSmallComp />
        {customSpacing}
      </Box>
    </>
  );
}

export default MarketAnalysis;
