import {
  Typography,
  Box,
  Unstable_Grid2 as Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material';
import { SelectInput } from '../inputs';
import { MarketAnalysisData } from '../../models';
import './styles.scss';

interface Props {
  data: MarketAnalysisData['propertyMarketData'];
  location: string;
}

function PropertiesComparison(props: Props) {
  const typeOptions: string[] = ['T1', 'T2', 'T3'];
  const yeildOptions: string[] = ['ascending', 'descending'];

  const selectedLocation = props.data.filter(
    (location) => location.localizacao === props.location,
  );

  const priceWithDots = (price?: number) =>
    price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const renderCard = (
    index: number,
    image: string,
    title: string,
    location: string,
    cardContent: any,
  ) => (
    <Card key={index} className="card">
      <CardActionArea href="/investment-analysis">
        <CardMedia component="img" image={image} className="card__media" />
        <CardContent className="card__content">
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2" color="text.secondary" align="right">
            {location}
          </Typography>
        </CardContent>
        <Divider />
      </CardActionArea>
      {cardContent}
    </Card>
  );

  const renderCardContent = (data: {
    [key: string]: string | number | undefined;
  }) => (
    <CardContent className="card__content">
      {Object.entries(data).map(([name, value], id) => (
        <div key={id}>
          <div className="card__content__data">
            <Typography variant="body2">{name}</Typography>
            <Typography variant="body2">{value}</Typography>
          </div>
          <Divider />
        </div>
      ))}
    </CardContent>
  );

  return (
    <Box className="investmentContainer">
      <Typography variant="h6">Real Estate Investment Analysis</Typography>
      <section>
        <SelectInput label="Typology" options={typeOptions} />
        <SelectInput label="Projected yeild" options={yeildOptions} />
      </section>
      <Grid className="gridContainer">
        {selectedLocation.map((value, id) =>
          renderCard(
            id,
            value.mainImage,
            value.title,
            value.localizacao,
            renderCardContent({
              Price: `${priceWithDots(value.price)} €`,
              'Sale Price per Sqm': value['sale-price-per-sqm_value'],
              'Bedrooms Value': value.bedrooms_value,
              'Bathrooms Value': value.bathrooms_value,
              'Area Value': value.area_value,
              'Days on Market': value['days-on-market_value'],
              'New Rental Yield Value': value['new-rental-yield_value'],
              'Energy Rating': value['energy-rating-estate-page_value'],
            }),
          ),
        )}
      </Grid>
    </Box>
  );
}

export default PropertiesComparison;
