import * as React from 'react';
import { Link } from 'react-router-dom';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { Order } from '../../../../utils/data_comparator';
import '../styles.scss';

interface Props {
  rows: any[];
  page: number;
  rowsPerPage: number;
  order: Order;
  orderBy: any;
  isSmallTable?: boolean;
}

function CustomTableBody(props: Props) {
  const rowData = (data: string | number) => (
    <TableCell className="tb__row__data" align="right">
      {data}
    </TableCell>
  );

  return (
    <TableBody className="tb">
      {props.rows
        .slice(
          props.page * props.rowsPerPage,
          props.page * props.rowsPerPage + props.rowsPerPage,
        )
        .map((row) => (
          <TableRow
            key={row.index}
            className="tb__row"
            hover
            onClick={() => {}}
          >
            <TableCell
              className="tb__row__data"
              component="th"
              scope="row"
              padding="none"
            >
              <Link to="/market-analysis" state={{ city: row.location }}>
                <TableCell component="th" scope="row">
                  {row.location}
                </TableCell>
              </Link>
            </TableCell>
            {rowData(row.mediumPrice)}
            {rowData(row.mediumPriceBySquare)}
            {!props.isSmallTable && (
              <>
                {rowData(row.totalStock)}
                {rowData(row.mediumMarketTime)}
                {rowData(row.mediumPriceOfRenting)}
                {rowData(row.mediumPriceBySquareOfRenting)}
                {rowData(row.totalStockOfRenting)}
                {rowData(row.mediumMarketTimeOfRenting)}
                {rowData(row.marketValue)}
                {rowData(row.yieldInd)}
                {rowData(row.marketValueCategory)}
                {rowData(row.codLocation)}
              </>
            )}
          </TableRow>
        ))}
    </TableBody>
  );
}

export default CustomTableBody;
