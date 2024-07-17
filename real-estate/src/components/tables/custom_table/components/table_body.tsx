import * as React from "react";
import { TableBody, TableCell, TableRow, Link } from "@mui/material";
import { stableSort, getComparator, Order } from "../../utils/data_comparator";
import { rows, smallTableRows } from "../../utils/mock_data";
import { DataType } from "../../utils/models";
import "../styles.scss";

interface Props {
  order: Order;
  orderBy: DataType;
  isSmallTable?: boolean;
}

function CustomTableBody(props: Props) {
  const sortedRows = React.useMemo(
    () =>
      stableSort(
        props.isSmallTable ? smallTableRows : rows,
        getComparator(props.order, props.orderBy)
      ).slice(),
    [props.order, props.orderBy]
  );

  const rowData = (data: string | number) => (
    <TableCell className="tb__row__data" align="right">
      {data}
    </TableCell>
  );

  return (
    <TableBody className="tb">
      {sortedRows.map((row) => (
        <TableRow className="tb__row" hover onClick={() => {}} key={row.id}>
          <TableCell
            className="tb__row__data"
            component="th"
            scope="row"
            padding="none"
          >
            <Link href="#">
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </Link>
          </TableCell>
          {rowData(row.calories)}
          {rowData(row.carbs)}
          {!props.isSmallTable && (
            <>
              {rowData(row.fat)}
              {rowData(row.protein)}
              {rowData(row.calories1)}
              {rowData(row.fat1)}
              {rowData(row.carbs1)}
              {rowData(row.protein1)}
            </>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
}

export default CustomTableBody;
