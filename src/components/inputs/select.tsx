import * as React from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface Props {
  label: string;
  options: string[] | null;
  routeValue?: string;
  setRouteValue?: any;
}

function SelectInput(props: Props) {
  const [state, setState] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) =>
    props.setRouteValue(event.target.value) || setState(event.target.value);

  return (
    <FormControl
      className="selectInput"
      size="small"
      sx={{ marginTop: '-10px', minWidth: '33%' }}
    >
      <InputLabel id="select-label">{props.label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={state || props.routeValue}
        label={props.label}
        onChange={handleChange}
      >
        {props.options &&
          props.options.map((option: string, index: number) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectInput;
