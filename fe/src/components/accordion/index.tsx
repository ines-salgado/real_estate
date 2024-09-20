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
import './styles.scss';

interface Props {
  width: string;
}

function CustomAccordion(props: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  /* mock data */
  const populationData = [
    { title: 'Population Density (nrº/km²)', value: 999999, percentage: '10%' },
    { title: 'Migration Balance (nrº)', value: 556200, percentage: '10%' },
    { title: 'Faro', value: 242700, percentage: '10%' },
  ];

  const accordionData = [
    {
      title: 'Population',
      populationData: populationData,
    },
    {
      title: 'Job Market',
      populationData: populationData,
    },
    {
      title: 'Crime',
      populationData: populationData,
    },
    {
      title: 'Construction',
      populationData: populationData,
    },
    {
      title: 'Real Estate Market',
      populationData: populationData,
    },
    {
      title: 'Industry',
      populationData: populationData,
    },
  ];
  /* *** */

  const handleExpand =
    (panel: string) => (_event: any, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const AccordionContent = ({
    panel,
    title,
  }: {
    panel: string;
    title: string;
  }) => (
    <Accordion expanded={expanded === panel} onChange={handleExpand(panel)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${panel}bh-content`}
        id={`${panel}bh-header`}
        className="accordion__summary"
      >
        <Typography variant="body1" fontSize="15px">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="accordion__details">
        {/* replace with data */}
        {populationData.map((data, index) => (
          <Link
            key={index}
            component="button"
            className="accordion__details__link"
          >
            <Typography className="accordion__details__title">
              {data.title}
            </Typography>
            <div className="accordion__details__values">
              <Typography>{data.value}</Typography>
              <Typography>{data.percentage}</Typography>
            </div>
          </Link>
        ))}
      </AccordionDetails>
    </Accordion>
  );

  return (
    <Grid className="accordion__grid" width={props.width}>
      <section>
        <Typography variant="body1">Indicator</Typography>
        <Typography variant="body1">Value</Typography>
      </section>
      <Box className="accordion__box">
        {accordionData.map((data, index) => (
          <AccordionContent
            key={index}
            panel={`panel${index}`}
            title={data.title}
          />
        ))}
      </Box>
    </Grid>
  );
}

export default CustomAccordion;
