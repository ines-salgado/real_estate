import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { createData } from '../../../models/chart';
import { CollapsibleRows, InputRows } from './components';

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
