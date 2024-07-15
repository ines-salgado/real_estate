import * as React from "react";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Order } from "../../utils/dataComparator";
import { Data, SmallData } from "..";
import "../styles.scss";

interface Props {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data | keyof SmallData
  ) => void;
  order: Order;
  orderBy: keyof Data | keyof SmallData;
  isSmallTable?: boolean;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data | keyof SmallData;
  label: string;
  numeric: boolean;
}

function CustomTableHead(props: Props) {
  const headCells: readonly HeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Dessert (100g serving)"
    },
    {
      id: "calories",
      numeric: true,
      disablePadding: false,
      label: "Calories"
    },
    {
      id: "fat",
      numeric: true,
      disablePadding: false,
      label: "Fat (g)"
    },
    {
      id: "carbs",
      numeric: true,
      disablePadding: false,
      label: "Carbs (g)"
    },
    {
      id: "protein",
      numeric: true,
      disablePadding: false,
      label: "Protein (g)"
    },
    {
      id: "calories",
      numeric: true,
      disablePadding: false,
      label: "Calories"
    },
    {
      id: "fat",
      numeric: true,
      disablePadding: false,
      label: "Fat (g)"
    },
    {
      id: "carbs",
      numeric: true,
      disablePadding: false,
      label: "Carbs (g)"
    },
    {
      id: "protein",
      numeric: true,
      disablePadding: false,
      label: "Protein (g)"
    }
  ];

  const smallTableHeadCells: readonly HeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Dessert (100g serving)"
    },
    {
      id: "calories",
      numeric: true,
      disablePadding: false,
      label: "Calories"
    },
    {
      id: "fat",
      numeric: true,
      disablePadding: false,
      label: "Fat (g)"
    }
  ];

  const createSortHandler =
    (property: keyof Data | keyof SmallData) =>
    (event: React.MouseEvent<unknown>) =>
      props.onRequestSort(event, property);

  return (
    <TableHead className="th">
      <TableRow className="th__row">
        {(props.isSmallTable ? smallTableHeadCells : headCells).map(
          (headCell) => (
            <TableCell
              className="th__row__cell"
              key={headCell.id}
              align={headCell.id === "name" ? "left" : "right"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={
                props.orderBy === headCell.id ? props.order : false
              }
            >
              <TableSortLabel
                active={props.orderBy === headCell.id}
                direction={props.orderBy === headCell.id ? props.order : "asc"}
                onClick={createSortHandler(headCell.id)}
                className="th__row__cell__label"
              >
                {headCell.label}
                {props.orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {props.order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  );
}

export default CustomTableHead;
