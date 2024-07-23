import * as React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { CustomAccordion, AreaChart } from "..";
import "./styles.scss";

function SimpleTabs() {
  const [tabValue, setTabValue] = React.useState<number>(0);

  const tabLabelProps = (id: number) => ({
    id: `simple-tab-${id}`,
    "aria-controls": `simple-tabpanel-${id}`
  });

  const CustomTabPanel = ({
    index,
    value,
    children
  }: {
    index: number;
    value: number;
    children?: React.ReactNode;
  }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box className="boxTabs__tabPanel">{children}</Box>}
    </div>
  );

  const handleChangeTab = (_event: any, newTabValue: number) =>
    setTabValue(newTabValue);

  return (
    <Box className="boxTabs">
      <Typography variant="h6">Market Forecasts</Typography>
      <Box className="boxTabs__section">
        <Tabs value={tabValue} onChange={handleChangeTab}>
          <Tab label="Property Market Trends" {...tabLabelProps(0)} />
          <Tab label="Market Dynamics " {...tabLabelProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabValue} index={0} children={<AreaChart />} />
      <CustomTabPanel
        value={tabValue}
        index={1}
        children={<CustomAccordion />}
      />
    </Box>
  );
}

export default SimpleTabs;
