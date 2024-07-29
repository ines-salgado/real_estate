import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
  Unstable_Grid2 as Grid,
  Divider
} from "@mui/material";
import "./styles.scss";

function InvestmentSection() {
  const cardsData = [
    {
      image: "/images/luffy.png",
      alt: "luffy",
      title: "Luffy",
      subTitle: "one piece",
      data: [
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        }
      ]
    },
    {
      image: "/images/nami.png",
      alt: "nami",
      title: "Nami",
      subTitle: "one piece",
      data: [
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        }
      ]
    },
    {
      image: "/images/zoro.png",
      alt: "zoro",
      title: "Zoro",
      subTitle: "one piece",
      data: [
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        }
      ]
    },
    {
      image: "/images/robin.png",
      alt: "robin",
      title: "Robin",
      subTitle: "one piece",
      data: [
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        }
      ]
    },
    {
      image: "/images/chopper.png",
      alt: "chopper",
      title: "Chopper",
      subTitle: "one piece",
      data: [
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        },
        {
          name: "straw hat",
          value: "0"
        }
      ]
    }
  ];

  const CardsContent = ({
    image,
    alt,
    title,
    subTitle,
    data
  }: {
    image: string;
    alt: string;
    title: string;
    subTitle: string;
    data: Array<{ name: string; value: string }>;
  }) => (
    <Card className="card">
      <CardActionArea href="/investment-analysis">
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          className="card__media"
        />
        <CardContent className="card__content">
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2" color="text.secondary" align="right">
            {subTitle}
          </Typography>
        </CardContent>
        <Divider />
        <CardContent className="card__content">
          {data.map((data) => (
            <>
              <div className="card__content__data">
                <Typography variant="body2">{data.name}</Typography>
                <Typography variant="body2">{data.value}</Typography>
              </div>
              <Divider />
            </>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );

  return (
    <Box className="investmentContainer">
      <Typography variant="h6">Real Estate Investment Analysis</Typography>
      <Grid
        display="flex"
        direction="row"
        gap="10px"
        justifyContent="space-evenly"
      >
        {cardsData.map((card) => (
          <CardsContent
            image={card.image}
            alt={card.alt}
            title={card.title}
            subTitle={card.subTitle}
            data={card.data}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default InvestmentSection;
