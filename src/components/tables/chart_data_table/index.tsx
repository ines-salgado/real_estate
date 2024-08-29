import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { createData } from '../utils/chart_data_model';
import CollapsibleRows from './components/collapsible_rows';
import InputRows from './components/input_rows';

function ChartDataTable() {
  const rows = [createData()];

  return (
    <Table sx={{ width: '53%' }}>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.amount}</TableCell>
          </TableRow>
        ))}
        {rows.map((row, index) => (
          <InputRows key={index} row={row} />
        ))}
        {rows.map((row, index) => (
          <CollapsibleRows key={index} row={row} />
        ))}
      </TableBody>
    </Table>
  );
}

export default ChartDataTable;
