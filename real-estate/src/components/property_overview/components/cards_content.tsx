import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Unstable_Grid2 as Grid
} from "@mui/material";
import "../styles.scss";

function CardsContent({
  image,
  alt,
  title,
  price,
  data
}: {
  image: string;
  alt: string;
  title: string;
  price: string;
  data: Array<{ name: string; value: string }>;
}) {
  const dataRender = () => {
    const dataContent = (column: Array<{}>) => (
      <Grid xs={6} direction="column" width="50%">
        {column.map((element: any, index: number) => (
          <div key={index}>
            <div className="card__content__data">
              <Typography variant="body2">{element.name}</Typography>
              <Typography variant="body2">{element.value}</Typography>
            </div>
            <Divider />
          </div>
        ))}
      </Grid>
    );

    const firstColumn = data.slice(0, 4);
    const secondColumn = data.slice(4, 8);

    return (
      <Grid
        display="flex"
        direction="row"
        justifyContent="space-evenly"
        marginTop="10px"
        gap="10px"
      >
        {dataContent(firstColumn)}
        {dataContent(secondColumn)}
      </Grid>
    );
  };

  return (
    <Grid
      display="flex"
      direction="row"
      justifyContent="space-between"
      gap="15px"
    >
      <Grid xs={8} width="55%">
        <Card className="card">
          <CardMedia
            component="img"
            image={image}
            alt={alt}
            width="100%"
            className="card__media"
          />
        </Card>
      </Grid>
      <Grid xs={4} width="45%">
        <Card className="card">
          <CardContent className="card__content">
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body1" fontWeight="500">
              Price: {price}
            </Typography>
            {dataRender()}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CardsContent;
