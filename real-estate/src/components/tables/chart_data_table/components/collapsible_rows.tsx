import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@mui/material";
import {
  KeyboardArrowDown as ArrowDownIcon,
  KeyboardArrowUp as ArrowUpIcon
} from "@mui/icons-material";
import { CostsData, RowData } from "../../utils/chart_data_model";
import "../styles.scss";

interface Props {
  row: RowData;
  isIconCell?: boolean;
}

function CollapsibleRows(props: Props) {
  const renderTableRows = (costs: CostsData) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const borderBottom = open ? "1px solid rgba(224, 224, 224, 1)" : "initial";

    return (
      <>
        <TableRow>
          <TableCell
            sx={{ borderBottom: borderBottom }}
            component="th"
            align="left"
          >
            {costs.name}
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell sx={{ borderBottom: borderBottom }} align="right">
            {costs.amount}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <Table size="small">
                  <TableBody>
                    {costs.data.map((cost, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ borderBottom: "none" }} component="th">
                          {cost.name}
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none" }} align="right">
                          {cost.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

  return (
    <>
      {renderTableRows(props.row.purchaseCosts)}
      {renderTableRows(props.row.rehabCosts)}
    </>
  );
}

export default CollapsibleRows;
