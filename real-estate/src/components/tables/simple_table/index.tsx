import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link
} from "@mui/material";
import "./styles.scss";

const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) => ({
  name,
  calories,
  fat,
  carbs,
  protein,
  price,
  history: [
    {
      date: "2020-01-05",
      customerId: "11091700",
      amount: 3
    }
  ]
});

const rows = [
  createData("Frozen yoghurt", 1, 2, 3, 4, 5),
  createData("Ice cream sandwich", 1, 2, 3, 4, 5),
  createData("Eclair", 1, 2, 3, 4, 5),
  createData("Cupcake", 1, 2, 3, 4, 5),
  createData("Gingerbread", 1, 2, 3, 4, 5)
];

const Row = (props: { row: ReturnType<typeof createData> }) => {
  const { row } = props;

  return (
    <>
      <TableRow className="tb__row">
        <TableCell className="tb__row__data" align="left">
          <Link href="#">
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
          </Link>
        </TableCell>
        <TableCell className="tb__row__data" align="center">
          {row.calories}
        </TableCell>
        <TableCell className="tb__row__data" align="center">
          {row.fat}
        </TableCell>
        <TableCell className="tb__row__data" align="center">
          {row.carbs}
        </TableCell>
        <TableCell className="tb__row__data" align="center">
          {row.protein}
        </TableCell>
      </TableRow>
    </>
  );
};

function SimpleTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="collapsible table">
        <TableHead className="th">
          <TableRow className="th__row">
            <TableCell className="th__row__title" align="left">
              Dessert (100g serving)
            </TableCell>
            <TableCell className="th__row__title" align="center">
              Calories
            </TableCell>
            <TableCell className="th__row__title" align="center">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell className="th__row__title" align="center">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell className="th__row__title" align="center">
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tb">
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default SimpleTable;
