import { Box } from "@mui/material";
import customSpacing from "../utils/custom_spacing";
import {
  PageTitle,
  SelectInput,
  SimpleTabs,
  PropertiesComparison,
  AreaChart
} from "../components";
import { MarketDynamics, KeyIndicatores } from "./sections";
import "./styles.scss";

function MarketAnalysis() {
  const options: string[] = ["cacém", "lisboa"];

  const tabsData = {
    title: "Market Forecasts",
    data: [
      {
        tabLabel: "Property Market Trends",
        comp: <AreaChart />
      },
      {
        tabLabel: "Market Dynamics",
        comp: <MarketDynamics />
      }
    ]
  };

  return (
    <>
      <PageTitle title="Market Analysis" />
      <Box className="pageContainer">
        <SelectInput label="City" options={options} />
        {customSpacing}
        <KeyIndicatores
          title="Real Estate Price Index"
          isSmallComp
          hasPercentage
        />
        {customSpacing}
        <SimpleTabs tabsData={tabsData} />
        {customSpacing}
        <PropertiesComparison />
        {customSpacing}
      </Box>
    </>
  );
}

export default MarketAnalysis;
