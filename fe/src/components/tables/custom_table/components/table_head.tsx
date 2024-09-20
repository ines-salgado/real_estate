import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import DashboardData from '../../../../models/dashboard';
import { Order } from '../../../../utils/data_comparator';
import '../styles.scss';

interface HeadCell {
  disablePadding: boolean;
  index: string; // index should be a string for column names
  label: string; // label is the header name for each column
  numeric: boolean;
}

interface Props {
  data: DashboardData['comparTable'];
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string | number;
  isSmallTable?: boolean;
}

function CustomTableHead(props: Props) {
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      props.onRequestSort(event, property);
    };

  const firstRow = Object.values(props.data)[0] as Record<string, any>;

  return (
    <TableHead className="th">
      <TableRow className="th__row">
        {Object.keys(firstRow)
          .map((key, index) => ({
            index: key, // key as the unique identifier
            numeric: typeof firstRow[key] === 'number', // check if value is numeric
            disablePadding: true,
            label: key, // use the key as label for the column
          }))
          .slice(0, props.isSmallTable ? 3 : undefined) // Slice for small table
          .map((headCell) => (
            <TableCell
              className="th__row__cell"
              key={headCell.index}
              align={headCell.label === 'Location' ? 'left' : 'right'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
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
