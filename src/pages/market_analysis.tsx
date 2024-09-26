import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { DashboardData, MarketAnalysisData } from "../models";
import {
  PageTitle,
  SelectInput,
  SimpleTabs,
  PropertiesComparison,
  AreaChart,
} from "../components";
import { MarketDynamics, KeyIndicatores } from "./sections";
import jsonData from "../data/data.json";
import "./styles.scss";

function MarketAnalysis() {
  const location = useLocation();

  const [routeCity, setRouteCity] = React.useState<string>("Amadora");

  const [comparTableLocations, setComparTableLocations] = React.useState<
    DashboardData["comparTable"] | null
  >(null);

  const [keys, setKeys] = React.useState<MarketAnalysisData["keyInd"] | null>(
    null
  );

  React.useEffect(() => {
    if (window.location.origin === "http://localhost:3000") {
      fetch("http://127.0.0.1:5000/data")
        .then((response) => response.json())
        .then((json) => {
          setKeys(json.MarketAnalysis?.KeyIndicatorsMarket || null);
          setComparTableLocations(json.Dashboard?.ComparativeTable || null);
        })
        .catch((error) => console.log("error: ", error));
    } else {
      setKeys((jsonData as any).MarketAnalysis?.KeyIndicatorsMarket);
      setComparTableLocations((jsonData as any).Dashboard?.ComparativeTable);
    }
  }, []);

  React.useMemo(() => {
    if (location.state) {
      const { city } = location.state;
      setRouteCity(city);
    }
  }, [location.state]);

  const locationOptions: string[] | null =
    comparTableLocations &&
    Object.values(comparTableLocations).map((loc) => loc.Location);

  const tabsData = {
    title: "Market Forecasts",
    data: [
      {
        tabLabel: "Property Market Trends",
        comp: <AreaChart />,
      },
      {
        tabLabel: "Market Dynamics",
        comp: <MarketDynamics />,
      },
    ],
  };

  return (
    <>
      <PageTitle title="Market Analysis" />
      <Box className="pageContainer">
        <SelectInput
          label="City"
          options={locationOptions}
          routeValue={routeCity}
        />
        <br /> <br />
        {keys && (
          <KeyIndicatores
            page="market_analysis"
            title="Real Estate Price Index"
            marketAnalysisData={keys}
            location={routeCity}
            isSmallComp
          />
        )}
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
