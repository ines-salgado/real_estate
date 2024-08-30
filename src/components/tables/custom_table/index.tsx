import * as React from 'react';
import {
  Table,
  TableContainer,
  Paper,
  Box,
  Typography,
  TablePagination,
} from '@mui/material';
import {
  stableSort,
  getComparator,
  Order,
} from '../../../utils/data_comparator';
import { TableDataType } from '../../../models/table';
import locationRankData from '../../../data/dashboard/location_rank.json';
import { CustomTableHead, CustomTableBody } from './components';
import './styles.scss';

interface Props {
  isSmallTable?: boolean;
}

function CustomTable(props: Props) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<TableDataType>('location');

  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(15);

  const rows = stableSort(
    locationRankData,
    getComparator(order, orderBy),
  ).slice();

  const handleChangePage = (_event: any, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (_event: any, property: TableDataType) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Box className="customTable" overflow="hidden">
      <Typography variant="h6" paddingBottom="15px">
        Comparative Market Analysis
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
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
            rows={rows}
            page={page}
            rowsPerPage={rowsPerPage}
            order={order}
            orderBy={orderBy}
            isSmallTable={props.isSmallTable}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 75, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}

export default CustomTable;
