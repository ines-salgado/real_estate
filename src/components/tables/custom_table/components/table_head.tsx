import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { smallTableHeadCells, headCells } from '../../utils/mock_data';
import { Order } from '../../utils/data_comparator';
import { DataType } from '../../utils/models';
import '../styles.scss';

interface Props {
  onRequestSort: (event: any, property: DataType) => void;
  order: Order;
  orderBy: DataType;
  isSmallTable?: boolean;
}

function CustomTableHead(props: Props) {
  const createSortHandler = (property: DataType) => (event: any) =>
    props.onRequestSort(event, property);

  return (
    <TableHead className="th">
      <TableRow className="th__row">
        {(props.isSmallTable ? smallTableHeadCells : headCells).map(
          (headCell) => (
            <TableCell
              className="th__row__cell"
              key={headCell.id}
              align={headCell.id === 'name' ? 'left' : 'right'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={
                props.orderBy === headCell.id ? props.order : false
              }
            >
              <TableSortLabel
                active={props.orderBy === headCell.id}
                direction={props.orderBy === headCell.id ? props.order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                color="white"
              >
                {headCell.label}
                {props.orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {props.order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ),
        )}
      </TableRow>
    </TableHead>
  );
}

export default CustomTableHead;
