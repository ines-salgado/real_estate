import { Chip, Stack } from '@mui/material';
import './styles.scss';

interface Props {
  data: string[];
}

function BasicChips(props: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      spacing={1}
      marginTop="5px"
    >
      {props.data.map((data: string, index: number) => (
        <Chip className="chip" key={index} label={data} />
      ))}
    </Stack>
  );
}

export default BasicChips;
