import { Box } from "@mui/material";
import { PageTitle, PropertyOverview, SimpleTabs } from "../components";
import { MarketDynamics, KeyIndicatores, PurchaseAndRehab } from "./sections";
import "./styles.scss";

function InvestmentAnalysis() {
  const tabsData = {
    title: "",
    data: [
      {
        tabLabel: "Purchase & Rehab",
        comp: <PurchaseAndRehab />
      },
      {
        tabLabel: "Financing (Purchase)",
        comp: <MarketDynamics />
      },
      {
        tabLabel: "Cash Flow (1 year)",
        comp: <PurchaseAndRehab />
      }
    ]
  };

  return (
    <>
      <PageTitle title="Investment Analysis" />
      <Box className="pageContainer">
        <PropertyOverview />
        <br /> <br />
        <KeyIndicatores
          title="Financial Summary / Performance Metrics"
          isSmallComp
        />
        <br /> <br />
        <SimpleTabs tabsData={tabsData} />
        <br /> <br />
      </Box>
    </>
  );
}

export default InvestmentAnalysis;
