import * as React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Unstable_Grid2 as Grid,
  Link,
  Typography,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { MarketAnalysisData } from '../../models';
import './styles.scss';

interface Props {
  location: string;
  marketDynamicsData?: MarketAnalysisData['marketDynamics'];
}

function CustomAccordion(props: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const accordionData =
    props.marketDynamicsData &&
    props.marketDynamicsData[props.location].map((data) => [
      {
        title: 'Evaluations',
        data: [
          {
            title: 'Total evaluations by the Bank',
            value: data['# Apartment evaluations by the Bank'],
          },
          {
            title: 'Apartment evaluations by the Bank',
            value: data['# House evaluations'],
          },
          {
            title: 'House evaluations',
            value: data['# Total evaluations by the Bank'],
          },
        ],
      },
      {
        title: 'Credits',
        data: [
          {
            title: 'Avg. monthly payment',
            value: data['Avg. monthly payment'],
          },
          {
            title: 'Amortized capital',
            value: data['Amortized capital'],
          },
          {
            title: 'Total interest',
            value: data['Total interest'],
          },
          {
            title: 'Euribor 1 month',
            value: data['Euribor 1 month'],
          },
          {
            title: 'Euribor 3 month',
            value: data['Euribor 3 month'],
          },
          {
            title: 'Euribor 6 month',
            value: data['Euribor 6 month'],
          },
          {
            title: 'Euribor 12 month',
            value: data['Euribor 12 month'],
          },
        ],
      },
      {
        title: 'Prices',
        data: [
          {
            title: 'Price increase in sell',
            value: data['Price increase in sell'],
          },
          {
            title: 'Price reduction in sell',
            value: data['Price reduction in sell'],
          },
          {
            title: 'New unique properties in sell',
            value: data['New unique properties in sell'],
          },
          {
            title: 'Sold and removed properties in sell',
            value: data['Sold and removed properties in sell'],
          },
          {
            title: 'Price increase in rent',
            value: data['Price increase in rent'],
          },
          {
            title: 'Price reduction in rent',
            value: data['Price reduction in rent'],
          },
          {
            title: 'New unique properties in rent',
            value: data['New unique properties in rent'],
          },
          {
            title: 'Sold and removed properties in rent',
            value: data['Sold and removed properties in rent'],
          },
          {
            title: 'Price to rent ratio',
            value: data['Price to rent ratio'],
          },
        ],
      },
      {
        title: 'Employment',
        data: [
          {
            title: 'Unemployment benefit recipients (thousands)',
            value: data['# Unemployment benefit recipients (thousands)'],
          },
          {
            title: 'Registered unemployment',
            value: data['Registered unemployment'],
          },
          {
            title: 'Unemployment throughout the period',
            value: data['Unemployment throughout the period'],
          },
        ],
      },
    ]);

  const handleExpand =
    (panel: string) => (_event: any, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const renderAccordionContent = (index: number, panel: string, data: any) => (
    <Accordion
      key={index}
      expanded={expanded === panel}
      onChange={handleExpand(panel)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${panel}bh-content`}
        id={`${panel}bh-header`}
        className="accordion__summary"
      >
        <Typography variant="body1" fontSize="15px">
          {data && data.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="accordion__details">
        {data &&
          Object.values(data).map((subData: any, id: number) => (
            <Link
              key={id}
              component="button"
              className="accordion__details__link"
            >
              <Typography className="accordion__details__title">
                {subData.title}
              </Typography>
              <div className="accordion__details__values">
                <Typography>{subData.data}</Typography>
              </div>
            </Link>
          ))}
      </AccordionDetails>
    </Accordion>
  );

  return (
    <Grid className="accordion__grid" width="100%">
      <section>
        <Typography variant="body1">Indicator</Typography>
        <Typography variant="body1">Value</Typography>
      </section>
      <Box className="accordion__box">
        {accordionData &&
          accordionData.map((data, id) =>
            renderAccordionContent(id, `panel${id}`, data[id]),
          )}
      </Box>
    </Grid>
  );
}

export default CustomAccordion;
