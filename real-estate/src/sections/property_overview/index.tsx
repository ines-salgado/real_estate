import React from "react";
import { Typography, Box, Unstable_Grid2 as Grid } from "@mui/material";
import { BasicBreadcrumbs, ReportButton } from "../../components";
import { imageDataJson, cardDataJson } from "./mock_data";
import CardsContent from "./components/cards_content";
import "./styles.scss";

function PropertyOverview() {
  const imageData = JSON.parse(imageDataJson);
  const cardData = JSON.parse(cardDataJson);

  return (
    <Box className="propertyViewContainer">
      <Grid className="header">
        <Typography variant="h6">Property Overview</Typography>
        <ReportButton />
      </Grid>
      <BasicBreadcrumbs country="Portugal" district="Lisboa" city="Cacém" />
      <CardsContent
        image={imageData.image}
        alt={imageData.alt}
        title={cardData.title}
        price={cardData.price}
        data={cardData.data}
      />
    </Box>
  );
}

export default PropertyOverview;
