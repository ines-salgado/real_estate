import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { DashboardData } from '../../../../models';
import { Order } from '../../../../utils/data_comparator';
import {
  afforTableOrderedKeys,
  comparTableOrderedKeys,
  profTableOrderedKeys,
  TableType,
} from '../utils';
import '../styles.scss';

interface Props {
  data: DashboardData[TableType];
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string | number;
  tableType: TableType;
  isSmallTable?: boolean;
}

function CustomTableHead(props: Props) {
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      props.onRequestSort(event, property);
    };

  if (!props.data || typeof props.data !== 'object') {
    return null;
  }

  const firstRow = Object.values(props.data)[0] as Record<string, any>;

  return (
    <TableHead className="th">
      <TableRow className="th__row">
        {(props.tableType === 'comparTable'
          ? comparTableOrderedKeys
          : props.tableType === 'afforTable'
            ? afforTableOrderedKeys
            : props.tableType === 'profTable'
              ? profTableOrderedKeys
              : []
        )
          .filter((key) => key in firstRow)
          .map((key) => ({
            index: key,
            numeric: typeof firstRow[key] === 'number',
            disablePadding: true,
            label: key,
          }))
          .slice(0, props.isSmallTable ? 3 : undefined)
          .map((headCell) => (
            <TableCell
              className="th__row__cell"
              key={headCell.index}
              align="center"
              padding="none"
              sortDirection={
                props.orderBy === headCell.index ? props.order : false
              }
            >
              <TableSortLabel
                active={props.orderBy === headCell.index}
                direction={
                  props.orderBy === headCell.index ? props.order : 'asc'
                }
                onClick={createSortHandler(headCell.index)}
                color="inherit"
              >
                {headCell.label}
                {props.orderBy === headCell.index ? (
                  <Box component="span" sx={visuallyHidden}>
                    {props.order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}

export default CustomTableHead;
