import * as React from "react";
import { TableBody, TableCell, TableRow, Link } from "@mui/material";
import { stableSort, getComparator, Order } from "../../utils/dataComparator";
import { createData, createSmallTableData, Data, SmallData } from "..";
import "../styles.scss";

interface Props {
  order: Order;
  orderBy: keyof Data | keyof SmallData;
  isSmallTable?: boolean;
}

function CustomTableBody(props: Props) {
  // Mock data
  const rows: Data[] = [
    createData(1, "Cupcake", 305, 3.7, 67, 4.3, 305, 3.7, 67, 4.3),
    createData(2, "Donut", 452, 25.0, 51, 4.9, 305, 3.7, 67, 4.3),
    createData(3, "Eclair", 262, 16.0, 24, 6.0, 305, 3.7, 67, 4.3),
    createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0, 305, 3.7, 67, 4.3),
    createData(5, "Gingerbread", 356, 16.0, 49, 3.9, 305, 3.7, 67, 4.3),
    createData(6, "Honeycomb", 408, 3.2, 87, 6.5, 305, 3.7, 67, 4.3),
    createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3, 305, 3.7, 67, 4.3),
    createData(8, "Jelly Bean", 375, 0.0, 94, 0.0, 305, 3.7, 67, 4.3),
    createData(9, "KitKat", 518, 26.0, 65, 7.0, 305, 3.7, 67, 4.3),
    createData(10, "Lollipop", 392, 0.2, 98, 0.0, 305, 3.7, 67, 4.3),
    createData(11, "Marshmallow", 318, 0, 81, 2.0, 305, 3.7, 67, 4.3),
    createData(12, "Nougat", 360, 19.0, 9, 37.0, 305, 3.7, 67, 4.3),
    createData(13, "Oreo", 437, 18.0, 63, 4.0, 305, 3.7, 67, 4.3)
  ];

  const smallTableRows: SmallData[] = [
    createSmallTableData(1, "Cupcake", 305, 3),
    createSmallTableData(2, "Donut", 452, 25),
    createSmallTableData(3, "Eclair", 262, 16),
    createSmallTableData(4, "Frozen yoghurt", 159, 6),
    createSmallTableData(5, "Gingerbread", 356, 16),
    createSmallTableData(6, "Honeycomb", 408, 3),
    createSmallTableData(7, "Ice cream sandwich", 237, 9),
    createSmallTableData(8, "Jelly Bean", 375, 0),
    createSmallTableData(9, "KitKat", 518, 26),
    createSmallTableData(10, "Lollipop", 392, 0)
  ];

  const sortedRows = React.useMemo(
    () => stableSort(rows, getComparator(props.order, props.orderBy)).slice(),
    [props.order, props.orderBy]
  );

  const smallTableSortedRows = React.useMemo(
    () =>
      stableSort(
        smallTableRows,
        getComparator(props.order, props.orderBy)
      ).slice(),
    [props.order, props.orderBy]
  );

  return (
    <TableBody className="tb">
      {props.isSmallTable
        ? smallTableSortedRows.map((row) => (
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
            </TableRow>
          ))
        : sortedRows.map((row) => (
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
                {row.fat}
              </TableCell>
              <TableCell className="tb__row__data" align="right">
                {row.carbs}
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
            </TableRow>
          ))}
    </TableBody>
  );
}

export default CustomTableBody;
