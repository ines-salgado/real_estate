import * as React from 'react';
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import {
  KeyboardArrowDown as ArrowDownIcon,
  KeyboardArrowUp as ArrowUpIcon,
} from '@mui/icons-material';
import { InvestmentAnalysisData } from '../../../models';
import { BasicTextField } from '../../inputs';

interface Props {
  selectedProperty: InvestmentAnalysisData['propertyMarketData'];
}

function ChartDataTable(props: Props) {
  const [inputValue, setInputValue] = React.useState<string>('');

  const [open, setOpen] = React.useState<boolean>(false);
  const borderBottom = open ? '1px solid rgba(224, 224, 224, 1)' : 'initial';

  const renderRowTitle = (title: string, isCollapsible?: boolean) => (
    <TableCell
      component="th"
      scope="row"
      sx={isCollapsible ? { borderBottom: borderBottom } : {}}
    >
      {title}
      {isCollapsible && (
        <IconButton size="small" onClick={() => setOpen(!open)}>
          {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </IconButton>
      )}
    </TableCell>
  );

  const renderRowStatic = (title: string, value: string | number) => (
    <TableRow>
      {renderRowTitle(title)}
      <TableCell align="right">{value}</TableCell>
    </TableRow>
  );

  const renderRowInput = (title: string, value: string | number) => (
    <TableRow>
      {renderRowTitle(title)}
      <TableCell align="right">
        <BasicTextField
          value={inputValue || String(value)}
          setValue={setInputValue}
        />
      </TableCell>
    </TableRow>
  );

  const renderRowCollapsible = (title: string) => (
    <>
      <TableRow>
        {renderRowTitle(title, true)}
        <TableCell sx={{ borderBottom: borderBottom }} align="right">
          5000
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small">
                <TableBody>
                  {renderRowInput('Closing cost', 5000)}
                  {renderRowInput('Financing cost', 5000)}
                  {renderRowInput('Other cost', 5000)}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );

  return (
    <Table sx={{ width: '53%' }}>
      {props.selectedProperty &&
        Object.values(props.selectedProperty).map((value, id) => (
          <TableBody key={id}>
            {renderRowStatic('Price:', `${value.price} €`)}
            {renderRowInput('After Repair Value:', `${value.price} €`)}
            {renderRowInput('Amount Financed:', `${value.price * 0.8} €`)}
            <Divider />
            {renderRowStatic('Down Payment:', `${value.price} €`)}
            {renderRowCollapsible('Purchase Costs')}
            {renderRowInput('Rehab Costs:', `${value.price} €`)}
            <Divider />
            {renderRowStatic('otal Cash Needed:', `${value.price} €`)}
          </TableBody>
        ))}
    </Table>
  );
}

export default ChartDataTable;
