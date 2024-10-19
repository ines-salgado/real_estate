import {
  Typography,
  Box,
  Unstable_Grid2 as Grid,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { InvestmentAnalysisData } from '../../models';
import { BasicBreadcrumbs, BasicChips, ReportButton } from '..';
import './styles.scss';

interface Props {
  data: InvestmentAnalysisData['propertyMarketData'];
  selectedProperty: any;
}

function PropertyOverview(props: Props) {
  const priceWithDots = (price?: number) =>
    price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const dataRender = (data: { [key: string]: string | number | undefined }) => (
    <section>
      {Object.entries(data).map(([name, value], id) => (
        <div key={id}>
          <div className="card__content__data">
            <Typography variant="body2" fontSize="17px">
              {name}
            </Typography>
            <Typography variant="body2" fontSize="17px">
              {value}
            </Typography>
          </div>
          <Divider />
        </div>
      ))}
    </section>
  );

  return (
    <Box className="propertyViewContainer">
      <Grid className="header">
        <Typography variant="h6">Property Overview</Typography>
        <ReportButton />
      </Grid>
      <BasicBreadcrumbs tableRegion="Amadora" />
      <Grid
        display="flex"
        direction="row"
        justifyContent="space-between"
        gap="15px"
        height="500px"
      >
        <Grid xs={8} width="55%">
          <Card className="card">
            <CardMedia
              component="img"
              image={props.selectedProperty?.mainImage}
              width="100%"
              className="card__media"
            />
          </Card>
        </Grid>
        <Grid xs={4} width="45%">
          <Card className="card">
            <CardContent className="card__content">
              <Typography variant="body1" fontSize="20px">
                {props.selectedProperty?.title}
              </Typography>
              <Typography variant="body1" fontSize="19px" fontWeight="500">
                Price: {priceWithDots(props.selectedProperty?.price)} €
              </Typography>
              <Grid
                xs={12}
                display="flex"
                direction="row"
                justifyContent="space-evenly"
                marginTop="10px"
                gap="20px"
              >
                <Grid xs={6}>
                  {dataRender({
                    'Sale Price per Sqm':
                      props.selectedProperty?.['sale-price-per-sqm_value'],
                    'Bedrooms Value': props.selectedProperty?.bedrooms_value,
                    'Bathrooms Value': props.selectedProperty?.bathrooms_value,
                    'Area Value': props.selectedProperty?.area_value,
                  })}
                </Grid>
                <Grid xs={6}>
                  {dataRender({
                    'Days on Market':
                      props.selectedProperty?.['days-on-market_value'],
                    'New Rental Yield Value':
                      props.selectedProperty?.['new-rental-yield_value'],
                    'Energy Rating':
                      props.selectedProperty?.[
                        'energy-rating-estate-page_value'
                      ],
                  })}
                </Grid>
              </Grid>
              <br />
              <div className="card__content__chips">
                <Typography variant="body1" fontSize="19px" fontWeight="500">
                  Characteristics:
                </Typography>
                <BasicChips data={props.selectedProperty?.combined_features} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PropertyOverview;
