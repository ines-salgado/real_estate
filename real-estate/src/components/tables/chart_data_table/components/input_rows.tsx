import * as React from "react";
import { TableCell, TableRow } from "@mui/material";
import { RowData } from "../../utils/chart_data_model";
import { BasicTextField } from "../../../inputs";

interface Props {
  row: RowData;
}

function InputRows(props: Props) {
  const [value, setValue] = React.useState<string>("");

  return (
    <>
      {props.row.inputData.map((data, index) => (
        <TableRow key={index} sx={{ justifyContent: "space-between" }}>
          <TableCell component="th" scope="row">
            {data.name}
          </TableCell>
          <TableCell align="right">
            <BasicTextField value={value || data.value} setValue={setValue} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default InputRows;
