import * as React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import './styles.scss';

interface Props {
  tabsData: {
    title: string;
    data: Array<{ tabLabel: string; comp: React.ReactNode }>;
  };
}

function SimpleTabs(props: Props) {
  const [tabValue, setTabValue] = React.useState<number>(0);

  const tabLabelProps = (id: number) => ({
    id: `simple-tab-${id}`,
    'aria-controls': `simple-tabpanel-${id}`,
  });

  const handleChangeTab = (_event: any, newTabValue: number) =>
    setTabValue(newTabValue);

  return (
    <Box className="boxTabs">
      <Typography variant="h6">{props.tabsData.title}</Typography>
      <Box className="boxTabs__section">
        <Tabs value={tabValue} onChange={handleChangeTab}>
          {props.tabsData.data.map((child, index) => (
            <Tab key={index} label={child.tabLabel} {...tabLabelProps(index)} />
          ))}
        </Tabs>
      </Box>
      {props.tabsData.data.map((child, index) => (
        <div
          key={index}
          role="tabpanel"
          hidden={tabValue !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
        >
          {tabValue === index && (
            <Box className="boxTabs__tabPanel">{child.comp}</Box>
          )}
        </div>
      ))}
    </Box>
  );
}

export default SimpleTabs;
