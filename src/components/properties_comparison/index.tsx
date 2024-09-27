import { Typography, Box, Unstable_Grid2 as Grid } from "@mui/material";
import { cardsDataJson } from "../../mock_data/market_analysis";
import { SelectInput } from "../inputs";
import PropertyCard from "./components/property_card";
import "./styles.scss";

function PropertiesComparison() {
  const cardsData = JSON.parse(cardsDataJson);

  const typeOptions: string[] = ["T1", "T2", "T3"];
  const yeildOptions: string[] = ["ascending", "descending"];

  return (
    <Box className="investmentContainer">
      <Typography variant="h6">Real Estate Investment Analysis</Typography>
      <section>
        <SelectInput label="Typology" options={typeOptions} routeValue="" />
        <SelectInput
          label="Projected yeild"
          options={yeildOptions}
          routeValue=""
        />
      </section>
      <Grid display="flex" direction="row" gap="10px" justifyContent="center">
        {cardsData.map((card: any, index: number) => (
          <PropertyCard
            key={index}
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

export default PropertiesComparison;
