import * as React from 'react';
import { Link } from 'react-router-dom';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { Order } from '../../../../utils/data_comparator';
import '../styles.scss';

interface Props {
  rows:
    | {
        [key: string]: string | number;
      }[]
    | null;
  page: number;
  rowsPerPage: number;
  order: Order;
  orderBy: any;
  isSmallTable?: boolean;
}

const orderedKeys = [
  'AVG Price (Sell)',
  'AVG Price per m² (Sell)',
  'Properties Sold (Sell)',
  'AVG Price (Rent)',
  'AVG Price per m² (Rent)',
  'Properties Sold (Rent)',
  'Price-to-Rent Ratio',
  'Market Value',
  '1 Year Performance',
  'Potential Yield',
];

function CustomTableBody(props: Props) {
  const rowData = (row: { [key: string]: string | number }) => {
    return orderedKeys.map((key, id) => (
      <TableCell key={id} className="tb__row__data" align="center">
        {row[key] !== undefined ? row[key] : 'N/A'}
      </TableCell>
    ));
  };

  return (
    <TableBody className="tb">
      {props.rows &&
        props.rows
          .slice(
            props.page * props.rowsPerPage,
            props.page * props.rowsPerPage + props.rowsPerPage,
          )
          .map((row, id) => (
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
