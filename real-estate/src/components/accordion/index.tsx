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

  const handleChange =
    (panel: string) => (_event: any, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Grid container direction="row">
      <Grid className="accordion">
        <section>
          <Typography variant="body1">Indicator</Typography>
          <Typography variant="body1">Value</Typography>
        </section>
        <Box className="accordion__box">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Population
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Job Market
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Crime
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Construction
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Real Estate Market
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Industry
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
              <Link component="button" underline="none">
                Link
              </Link>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
      <Grid>
        <AreaChart />
      </Grid>
    </Grid>
  );
}

export default CustomAccordion;
