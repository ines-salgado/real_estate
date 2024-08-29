import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
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
  const location = useLocation();

  const [routeCity, setRouteCity] = React.useState<string>("");

  React.useMemo(() => {
    if (location.state) {
      const { city } = location.state;
      setRouteCity(city);
    }
  }, [location.state]);

  const options: string[] = ["Frozen yoghurt", "Ice cream sandwich"];

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
        <SelectInput label="City" options={options} routeValue={routeCity} />
        <br /> <br />
        <KeyIndicatores
          title="Real Estate Price Index"
          isSmallComp
          hasPercentage
        />
        <br /> <br />
        <SimpleTabs tabsData={tabsData} />
        <br /> <br />
        <PropertiesComparison />
        <br /> <br />
      </Box>
    </>
  );
}

export default MarketAnalysis;
