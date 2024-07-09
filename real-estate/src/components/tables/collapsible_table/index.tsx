import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from "@mui/icons-material";

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

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <TableRow className="tb__row" sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell className="tb__row__data">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setIsOpen(!isOpen)}
          >
            {row.name}
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
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
      </TableRow>

      {/* { collapsible rows } */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="collapsible table">
        <TableHead className="th">
          <TableRow className="th__row">
            <TableCell className="th__row__title">
              Dessert (100g serving)
            </TableCell>
            <TableCell className="th__row__title" align="right">
              Calories
            </TableCell>
            <TableCell className="th__row__title" align="right">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell className="th__row__title" align="right">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell className="th__row__title" align="right">
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
export default CollapsibleTable;
