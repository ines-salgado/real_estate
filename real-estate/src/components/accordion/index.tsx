import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Link,
  Typography
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import AreaChart from "../graphs";
import "./styles.scss";

function CustomAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const populationData = [
    { title: "Population Density (nrº/km²)", value: 999999, percentage: "10%" },
    { title: "Migration Balance (nrº)", value: 556200, percentage: "10%" },
    { title: "Faro", value: 242700, percentage: "10%" }
  ];

  const handleExpand =
    (panel: string) => (_event: any, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const AccordionContent = ({
    panel,
    title
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
        {populationData.map((data) => (
          <Link component="button" className="accordion__details__link">
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
    <Grid display="flex" justifyContent="space-between" direction="row">
      <Grid className="accordion__grid">
        <section>
          <Typography variant="body1">Indicator</Typography>
          <Typography variant="body1">Value</Typography>
        </section>
        <Box className="accordion__box">
          <AccordionContent panel="panel1" title="Population" />
          <AccordionContent panel="panel2" title="Job Market" />
          <AccordionContent panel="panel3" title="Crime" />
          <AccordionContent panel="panel4" title="Construction" />
          <AccordionContent panel="panel5" title="Real Estate Market" />
          <AccordionContent panel="panel6" title="Industry" />
        </Box>
      </Grid>
      <AreaChart />
    </Grid>
  );
}

export default CustomAccordion;
