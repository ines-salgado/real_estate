import { Link } from 'react-router-dom';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { Order } from '../../../../utils/data_comparator';
import {
  afforTableOrderedRows,
  comparTableOrderedRows,
  profTableOrderedRows,
  TableType,
} from '../utils';
import '../styles.scss';

interface Props {
  rows:
    | {
        [key: string]: string | number;
      }[]
    | null;
  order: Order;
  orderBy: any;
  tableType: TableType;
  isSmallTable?: boolean;
}

function CustomTableBody(props: Props) {
  const rowData = (row: { [key: string]: string | number }) =>
    (props.tableType === 'comparTable'
      ? comparTableOrderedRows
      : props.tableType === 'afforTable'
        ? afforTableOrderedRows
        : props.tableType === 'profTable'
          ? profTableOrderedRows
          : []
    ).map((key, id) => (
      <TableCell key={id} className="tb__row__data" align="center">
        {row[key] !== undefined
          ? typeof row[key] === 'number' && !Number.isInteger(row[key])
            ? (row[key] as number).toFixed(2)
            : row[key]
          : 'N/A'}
      </TableCell>
    ));

  return (
    <TableBody className="tb">
      {props.rows &&
        props.rows.map((row, id) => (
          <TableRow key={id} className="tb__row" hover>
            <TableCell
              className="tb__row__data"
              component="th"
              scope="row"
              padding="none"
              align="center"
            >
              {'Location' in row ? (
                <Link to="/market-analysis" state={{ city: row.Location }}>
                  {row.Location}
                </Link>
              ) : (
                'N/A'
              )}
            </TableCell>
            {rowData(row)}
          </TableRow>
        ))}
    </TableBody>
  );
}

export default CustomTableBody;
