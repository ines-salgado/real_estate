import { Box, TextField } from "@mui/material";
import "./styles.scss";

interface Props {
  value: string;
  setValue: (value: any) => void;
}

function BasicTextField(props: Props) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined"
        value={props.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          props.setValue(event.target.value);
        }}
        className="textField"
        size="small"
      />
    </Box>
  );
}

export default BasicTextField;
