import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { Order } from '../../../../utils/data_comparator';
import { HeadCell, TableDataType } from '../../../../models/table';
import '../styles.scss';

interface Props {
  onRequestSort: (event: any, property: TableDataType) => void;
  order: Order;
  orderBy: TableDataType;
  isSmallTable?: boolean;
}

function CustomTableHead(props: Props) {
  const headCells: readonly HeadCell[] = [
    {
      index: 'location',
      numeric: false,
      disablePadding: true,
      label: 'Location',
    },
    {
      index: 'mediumPrice',
      numeric: true,
      disablePadding: false,
      label: 'Preço Médio (€)',
    },
    {
      index: 'mediumPriceBySquare',
      numeric: true,
      disablePadding: false,
      label: 'Preço Médio por m² (€)',
    },
    {
      index: 'totalStock',
      numeric: true,
      disablePadding: false,
      label: 'Total Stock',
    },
    {
      index: 'mediumMarketTime',
      numeric: true,
      disablePadding: false,
      label: 'Tempo Médio no Mercado',
    },
    {
      index: 'mediumPriceOfRenting',
      numeric: true,
      disablePadding: false,
      label: 'Preço Médio de Aluguel (€)',
    },
    {
      index: 'mediumPriceBySquareOfRenting',
      numeric: true,
      disablePadding: false,
      label: 'Preço Médio por m² de Aluguel (€)',
    },
    {
      index: 'totalStockOfRenting',
      numeric: true,
      disablePadding: false,
      label: 'Total Stock de Aluguel',
    },
    {
      index: 'mediumMarketTimeOfRenting',
      numeric: true,
      disablePadding: false,
      label: 'Tempo Médio no Mercado de Aluguel',
    },
    {
      index: 'marketValue',
      numeric: true,
      disablePadding: false,
      label: 'Market Value',
    },
    {
      index: 'yieldInd',
      numeric: true,
      disablePadding: false,
      label: 'Yield',
    },
    {
      index: 'marketValueCategory',
      numeric: false,
      disablePadding: false,
      label: 'Market Value Category',
    },
    {
      index: 'codLocation',
      numeric: false,
      disablePadding: false,
      label: 'Cod Location',
    },
  ];

  const createSortHandler = (property: TableDataType) => (event: any) =>
    props.onRequestSort(event, property);

  return (
    <TableHead className="th">
      <TableRow className="th__row">
        {(props.isSmallTable ? headCells.slice(0, 3) : headCells).map(
          (headCell) => (
            <TableCell
              className="th__row__cell"
              key={headCell.index}
              align={headCell.index === 'location' ? 'left' : 'right'}
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
                color="white"
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
          ),
        )}
      </TableRow>
    </TableHead>
  );
}

export default CustomTableHead;
