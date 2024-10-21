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
  const price =
    props.selectedProperty &&
    Object.values(props.selectedProperty).map((value) => value.price);

  const initialValues = {
    afterRepairValue: Number.isInteger(Number(price) * 0.8)
      ? (Number(price) * 0.8).toString()
      : (Number(price) * 0.8).toFixed(2).toString(),
    amountFinanced: Number.isInteger(Number(price) * 0.8)
      ? (Number(price) * 0.8).toString()
      : (Number(price) * 0.8).toFixed(2).toString(),
    downPayment: Number.isInteger(Number(price) * 0.2)
      ? (Number(price) * 0.2).toString()
      : (Number(price) * 0.2).toFixed(2).toString(),
    purchaseCosts: '1000',
    closingCosts: '500',
    financingCosts: '400',
    otherCosts: '100',
    rehabCosts: '2000',
  };

  const [afterRepairValue, setAfterRepairValue] = React.useState<string>(
    initialValues.afterRepairValue,
  );
  const [amountFinanced, setAmountFinanced] = React.useState<string>(
    initialValues.amountFinanced,
  );
  const [downPayment, setDownPayment] = React.useState<string>(
    initialValues.downPayment,
  );
  const [purchaseCosts, setPurchaseCosts] = React.useState<string>(
    initialValues.purchaseCosts,
  );
  const [closingCosts, setClosingCosts] = React.useState<string>(
    initialValues.closingCosts,
  );
  const [financingCosts, setFinancingCosts] = React.useState<string>(
    initialValues.financingCosts,
  );
  const [otherCosts, setOtherCosts] = React.useState<string>(
    initialValues.otherCosts,
  );
  const [rehabCosts, setRehabCosts] = React.useState<string>(
    initialValues.rehabCosts,
  );
  const [totalNeeded, setTotalNeeded] = React.useState<string>('');

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

  const renderRowStatic = (title: string, value: string) => (
    <TableRow>
      {renderRowTitle(title)}
      <TableCell align="right">{value}</TableCell>
    </TableRow>
  );

  const renderRowInput = (title: string, value: string, setValue: any) => (
    <TableRow>
      {renderRowTitle(title)}
      <TableCell align="right">
        <BasicTextField value={value} setValue={setValue} />
      </TableCell>
    </TableRow>
  );

  const renderRowCollapsible = (
    <>
      <TableRow>
        {renderRowTitle('Purchase Costs', true)}
        <TableCell sx={{ borderBottom: borderBottom }} align="right">
          {purchaseCosts}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small">
                <TableBody>
                  {renderRowInput(
                    'Closing cost',
                    closingCosts,
                    setClosingCosts,
                  )}
                  {renderRowInput(
                    'Financing cost',
                    financingCosts,
                    setFinancingCosts,
                  )}
                  {renderRowInput('Other cost', otherCosts, setOtherCosts)}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );

  React.useEffect(() => {
    const amountFinancedValue = Number(afterRepairValue) * 0.8;
    const downPaymentValue = Number(afterRepairValue) * 0.2;
    const purchaseCostsValue =
      Number(closingCosts) + Number(financingCosts) + Number(otherCosts);
    const totalCashNeededValue =
      Number(downPayment) + Number(purchaseCosts) + Number(rehabCosts);

    amountFinanced === initialValues.amountFinanced &&
      setAmountFinanced(
        Number.isInteger(amountFinancedValue)
          ? amountFinancedValue.toString()
          : amountFinancedValue.toFixed(2).toString(),
      );
    downPayment === initialValues.downPayment &&
      setDownPayment(
        Number.isInteger(downPaymentValue)
          ? downPaymentValue.toString()
          : downPaymentValue.toFixed(2).toString(),
      );
    setPurchaseCosts(
      Number.isInteger(purchaseCostsValue)
        ? purchaseCostsValue.toString()
        : purchaseCostsValue.toFixed(2).toString(),
    );
    setTotalNeeded(
      Number.isInteger(totalCashNeededValue)
        ? totalCashNeededValue.toString()
        : totalCashNeededValue.toFixed(2).toString(),
    );
  }, [
    afterRepairValue,
    closingCosts,
    financingCosts,
    otherCosts,
    downPayment,
    purchaseCosts,
    rehabCosts,
    totalNeeded,
    amountFinanced,
    initialValues.amountFinanced,
    initialValues.downPayment,
  ]);

  return (
    <Table sx={{ width: '53%' }}>
      {props.selectedProperty &&
        Object.values(props.selectedProperty).map((value, id) => (
          <TableBody key={id}>
            {renderRowStatic('Price:', `${value.price} €`)}
            {renderRowInput(
              'After Repair Value:',
              afterRepairValue,
              setAfterRepairValue,
            )}
            {renderRowInput(
              'Amount Financed:',
              amountFinanced,
              setAmountFinanced,
            )}
            <Divider />
            {renderRowInput('Down Payment:', downPayment, setDownPayment)}
            {renderRowCollapsible}
            {renderRowInput('Rehab Costs:', rehabCosts, setRehabCosts)}
            <Divider />
            {renderRowStatic('Total Cash Needed:', totalNeeded)}
          </TableBody>
        ))}
    </Table>
  );
}

export default ChartDataTable;
