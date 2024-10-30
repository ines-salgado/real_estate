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
  setYAxisTitle?: any;
}

function CustomAccordion(props: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const accordionData = [
    {
      title: 'Evaluations',
      subTitles: [
        '# Total evaluations by the Bank',
        '# Apartment evaluations by the Bank',
        '# House evaluations',
      ],
    },
    {
      title: 'Credits',
      subTitles: [
        'Avg. monthly payment',
        'Amortized capital',
        'Total interest',
        'Euribor 1 month',
        'Euribor 3 month',
        'Euribor 6 month',
        'Euribor 12 month',
      ],
    },
    {
      title: 'Prices',
      subTitles: [
        'Price increase in sell',
        'Price reduction in sell',
        'New unique properties in sell',
        'Sold and removed properties in sell',
        'Price increase in rent',
        'Price reduction in rent',
        'New unique properties in rent',
        'Sold and removed properties in rent',
        'Price to rent ratio',
      ],
    },
    {
      title: 'Employment',
      subTitles: [
        'Unemployment benefit recipients (thousands)',
        'Registered unemployment',
        'Unemployment throughout the period',
      ],
    },
  ];

  const handleExpand = (panel: string) => (_event: any, isExpanded: boolean) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <Grid className="accordion__grid" width="30%">
      <section>
        <Typography variant="body1">Indicator</Typography>
        <Typography variant="body1">Value</Typography>
      </section>
      <Box className="accordion__box">
        {accordionData.map((data, id) => (
          <Accordion
            key={id}
            expanded={expanded === `panel${id}`}
            onChange={handleExpand(`panel${id}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${`panel${id}`}bh-content`}
              id={`${`panel${id}`}bh-header`}
              className="accordion__summary"
            >
              <Typography variant="body1" fontSize="15px">
                {data && data.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion__details">
              {data &&
                data.subTitles.map((st: string, id: number) => (
                  <Link
                    key={id}
                    component="button"
                    className="accordion__details__link"
                    onClick={() => props.setYAxisTitle(st)}
                  >
                    <Typography className="accordion__details__title">
                      {st}
                    </Typography>
                  </Link>
                ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Grid>
  );
}

export default CustomAccordion;
