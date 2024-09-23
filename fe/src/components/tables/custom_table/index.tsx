import * as React from 'react';
import { Table, TableContainer, Paper, Box, Typography } from '@mui/material';
import {
  stableSort,
  getComparator,
  Order,
} from '../../../utils/data_comparator';
import { DashboardData } from '../../../models';
import { TableType } from './utils';
import { CustomTableHead, CustomTableBody } from './components';
import './styles.scss';

interface Props {
  data: DashboardData[TableType];
  tableType: TableType;
  isSmallTable?: boolean;
}

function CustomTable(props: Props) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<string | number>('Location');

  const rows =
    props.data || typeof props.data == 'object'
      ? stableSort(
          Object.values(props.data),
          getComparator(order, orderBy),
        ).slice()
      : null;

  const handleRequestSort = (_event: any, property: string | number) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  if (!props.data || typeof props.data !== 'object') {
    return null;
  }

  return (
    <Box className="customTable" overflow="hidden">
      <Typography variant="h6" paddingBottom="15px">
        {props.tableType === 'comparTable'
          ? 'Comparative'
          : props.tableType === 'afforTable'
            ? 'Most Affordable'
            : props.tableType === 'profTable' && 'Most Profitable'}{' '}
        Market Analysis
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table
          sx={props.isSmallTable ? { minWidth: 365 } : { minWidth: 650 }}
          size="small"
        >
          <CustomTableHead
            data={props.data}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            tableType={props.tableType}
            isSmallTable={props.isSmallTable}
          />
          <CustomTableBody
            rows={rows}
            order={order}
            orderBy={orderBy}
            tableType={props.tableType}
            isSmallTable={props.isSmallTable}
          />
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomTable;
