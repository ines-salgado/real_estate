import React from "react";
import { Typography, Box } from "@mui/material";
import { imageDataJson, cardDataJson } from "./mock_data";
import CardsContent from "./components/cards_content";
import "./styles.scss";

function PropertyOverview() {
  const imageData = JSON.parse(imageDataJson);
  const cardData = JSON.parse(cardDataJson);

  return (
    <Box className="propertyViewContainer">
      <Typography variant="h6">Property Overview</Typography>
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
