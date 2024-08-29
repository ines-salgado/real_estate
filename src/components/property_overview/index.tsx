import {
  Typography,
  Box,
  Unstable_Grid2 as Grid,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { BasicBreadcrumbs, BasicChips, ReportButton } from '..';
import { imageDataJson, cardDataJson } from './mock_data';
import './styles.scss';

function PropertyOverview() {
  const imageData = JSON.parse(imageDataJson);
  const cardData = JSON.parse(cardDataJson);

  const firstColumn = cardData.data.slice(0, 4);
  const secondColumn = cardData.data.slice(4, 8);

  const dataRender = (column: Array<{}>) => (
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

  return (
    <Box className="propertyViewContainer">
      <Grid className="header">
        <Typography variant="h6">Property Overview</Typography>
        <ReportButton />
      </Grid>
      <BasicBreadcrumbs country="Portugal" district="Lisboa" city="Cacém" />
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
              image={imageData.image}
              alt={imageData.alt}
              width="100%"
              className="card__media"
            />
          </Card>
        </Grid>
        <Grid xs={4} width="45%">
          <Card className="card">
            <CardContent className="card__content">
              <Typography variant="body1">{cardData.title}</Typography>
              <Typography variant="body1" fontWeight="500">
                Price: {cardData.price}
              </Typography>
              <Grid
                display="flex"
                direction="row"
                justifyContent="space-evenly"
                marginTop="10px"
                gap="10px"
              >
                {dataRender(firstColumn)}
                {dataRender(secondColumn)}
              </Grid>
              <div className="card__content__chips">
                <Typography variant="body1" fontWeight={500}>
                  Characteristics:
                </Typography>
                <BasicChips data={cardData.chips} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PropertyOverview;
