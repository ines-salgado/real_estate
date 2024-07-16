import * as React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import AreaChart from "../graphs";
import "./styles.scss";

function SimpleTabs() {
  const [tabValue, setTabValue] = React.useState(0);

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
      {value === index && <Box className="tabPanel">{children}</Box>}
    </div>
  );

  const handleChange = (_event: any, newTabValue: number) =>
    setTabValue(newTabValue);

  return (
    <Box className="boxTabs">
      <Typography className="boxTabs__title" variant="h6">
        Market Trends
      </Typography>
      <Box className="boxTabs__section">
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="Market Phases/Moment" {...tabLabelProps(0)} />
          <Tab
            label="Property Market (Sales/Rental Square Meterage)"
            {...tabLabelProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabValue} index={0} children={<AreaChart />} />
      <CustomTabPanel value={tabValue} index={1} children={<AreaChart />} />
    </Box>
  );
}

export default SimpleTabs;
