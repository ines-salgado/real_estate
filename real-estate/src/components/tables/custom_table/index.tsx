import * as React from "react";
import { Table, TableContainer, Paper, Box, Typography } from "@mui/material";
import { Order } from "./utils/data_comparator";
import { DataType } from "./utils/models";
import { CustomTableHead, CustomTableBody } from "./components";
import "./styles.scss";

interface Props {
  isSmallTable?: boolean;
}

function CustomTable(props: Props) {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<DataType>("calories");

  const handleRequestSort = (_event: any, property: DataType) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box className="customTable">
      <Typography variant="h6" paddingBottom="15px">
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
