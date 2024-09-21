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

interface Props {
  data: DashboardData['comparTable'];
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string | number;
  isSmallTable?: boolean;
}

const orderedColumns = [
  'Location',
  'AVG Price (Sell)',
  'AVG Price per m² (Sell)',
  'Properties Sold (Sell)',
  'AVG Price (Rent)',
  'AVG Price per m² (Rent)',
  'Properties Sold (Rent)',
  'Price-to-Rent Ratio',
  'Market Value',
  '1 Year Performance',
  'Potential Yield',
];

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
        {orderedColumns
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
