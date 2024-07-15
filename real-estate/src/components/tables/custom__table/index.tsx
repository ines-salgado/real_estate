import * as React from "react";
import { Table, TableContainer, Paper, Box, Typography } from "@mui/material";
import { Order } from "../utils/dataComparator";
import { CustomTableHead, CustomTableBody } from "./components";
import "./styles.scss";

export interface Data {
  id: number;
  calories: number;
  carbs: number;
  name: string;
  fat: number;
  protein: number;
  calories1: number;
  fat1: number;
  carbs1: number;
  protein1: number;
}

export function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  calories1: number,
  fat1: number,
  carbs1: number,
  protein1: number
): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
    calories1,
    fat1,
    carbs1,
    protein1
  };
}

export interface SmallData {
  id: number;
  calories: number;
  carbs: number;
  name: string;
}

export function createSmallTableData(
  id: number,
  name: string,
  calories: number,
  carbs: number
): SmallData {
  return {
    id,
    name,
    calories,
    carbs
  };
}

interface Props {
  isSmallTable?: boolean;
}

function CustomTable(props: Props) {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data | keyof SmallData>(
    "calories"
  );

  const handleRequestSort = (
    _event: any,
    property: keyof Data | keyof SmallData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box className="customTable">
      <Typography variant="h6" className="customTable__title">
        Comparative Market Analysis
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={props.isSmallTable ? { minWidth: 365 } : { minWidth: 650 }}
          size="small"
        >
          <CustomTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            isSmallTable={props.isSmallTable}
          />
          <CustomTableBody
            order={order}
            orderBy={orderBy}
            isSmallTable={props.isSmallTable}
          />
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomTable;
