import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableCell,
  TableRow
} from "@mui/material";
import { createData } from "./utils/model";
import CollapsibleRows from "./components/collapsible_rows";
import InputRows from "./components/input_rows";

function ChartDataTable() {
  const rows = [createData()];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row, index) => (
            <div key={index}>
              <TableRow>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
              <InputRows row={row} />
              <CollapsibleRows row={row} />
            </div>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ChartDataTable;
