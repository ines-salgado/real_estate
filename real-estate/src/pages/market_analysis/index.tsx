import { Box } from "@mui/material";
import customSpacing from "../../utils/custom_spacing";
import {
  KeyIndicatores,
  PageTitle,
  SelectInput,
  SimpleTabs
} from "../../components";
import "../styles.scss";

function MarketAnalysis() {
  return (
    <>
      <PageTitle title="Market Analysis" />
      <Box className="pageContainer">
        <SelectInput />
        {customSpacing}
        <KeyIndicatores isSmallComp />
        {customSpacing}
        <SimpleTabs />
        {customSpacing}
      </Box>
    </>
  );
}

export default MarketAnalysis;
