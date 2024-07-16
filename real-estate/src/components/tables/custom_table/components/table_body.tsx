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
          <TableCell className="tb__row__data" align="right">
            {row.calories}
          </TableCell>
          <TableCell className="tb__row__data" align="right">
            {row.carbs}
          </TableCell>
          {!props.isSmallTable && (
            <>
              <TableCell className="tb__row__data" align="right">
                {row.fat}
              </TableCell>
              <TableCell className="tb__row__data" align="right">
                {row.protein}
              </TableCell>
              <TableCell className="tb__row__data" align="right">
                {row.calories1}
              </TableCell>
              <TableCell className="tb__row__data" align="right">
                {row.fat1}
              </TableCell>
              <TableCell className="tb__row__data" align="right">
                {row.carbs1}
              </TableCell>
              <TableCell className="tb__row__data" align="right">
                {row.protein1}
              </TableCell>
            </>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
}

export default CustomTableBody;
