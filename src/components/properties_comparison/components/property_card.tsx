import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Divider,
} from '@mui/material';
import '../styles.scss';

interface Props {
  image: string;
  alt: string;
  title: string;
  subTitle: string;
  data: Array<{ name: string; value: string }>;
}

function PropertyCard(props: Props) {
  return (
    <Card className="card">
      <CardActionArea href="/investment-analysis">
        <CardMedia
          component="img"
          image={props.image}
          alt={props.alt}
          className="card__media"
        />
        <CardContent className="card__content">
          <Typography variant="body1">{props.title}</Typography>
          <Typography variant="body2" color="text.secondary" align="right">
            {props.subTitle}
          </Typography>
        </CardContent>
        <Divider />
        <CardContent className="card__content">
          {props.data.map((data, index) => (
            <div key={index}>
              <div className="card__content__data">
                <Typography variant="body2">{data.name}</Typography>
                <Typography variant="body2">{data.value}</Typography>
              </div>
              <Divider />
            </div>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PropertyCard;
