import { Typography, Box, Link, Unstable_Grid2 as Grid } from "@mui/material";
import "./styles.scss";

function Links() {
  const link = (
    <Link
      variant="body2"
      target="_blank"
      href="https://insights-reports.s3.fr-par.scw.cloud/alfredo_insights_report_05_2024_pt.pdf"
      className="links__grid__item"
    >
      Alfredo – Índice de Preços Residencial – Apr
    </Link>
  );

  return (
    <Box className="links">
      <Typography variant="h6" className="links__title">
        Ano 2024
      </Typography>
      <Grid className="links__grid">
        <Grid>
          {link}
          {link}
          {link}
          {link}
          {link}
        </Grid>
        <Grid>
          {link}
          {link}
          {link}
          {link}
          {link}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Links;
