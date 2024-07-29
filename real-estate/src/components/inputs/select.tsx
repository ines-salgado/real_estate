import * as React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent
} from "@mui/material";

function SelectInput() {
  const [city, setCity] = React.useState<string>("2");

  const handleChange = (event: SelectChangeEvent) =>
    setCity(event.target.value);

  return (
    <FormControl
      className="selectInput"
      size="small"
      sx={{ marginTop: "-10px", minWidth: "33%" }}
    >
      <InputLabel id="select-label">City</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={city}
        label="City"
        onChange={handleChange}
      >
        <MenuItem value={1}>Lisboa</MenuItem>
        <MenuItem value={2}>Cacém</MenuItem>
        <MenuItem value={3}>Mogadouro</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectInput;
