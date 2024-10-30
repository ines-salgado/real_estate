import * as React from 'react';
import { Divider, Table, TableBody } from '@mui/material';
import { InvestmentAnalysisData } from '../../../models';
import { renderRowInput, renderRowStatic, renderRowCollapsible } from './utils';

interface Props {
  selectedProperty: InvestmentAnalysisData['propertyMarketData'];
  downPayment: string;
  purchaseCosts: string;
  rehabCosts: string;
  setDownPayment: any;
  setPurchaseCosts: any;
  setRehabCosts: any;
}

function ChartDataTable(props: Props) {
  const price =
    props.selectedProperty &&
    Object.values(props.selectedProperty).map((value) => value.price);

  const [afterRepairValue, setAfterRepairValue] = React.useState<string>(
    Number.isInteger(Number(price))
      ? Number(price).toString()
      : Number(price).toFixed(2).toString(),
  );
  const [amountFinanced, setAmountFinanced] = React.useState<string>(
    Number.isInteger(Number(price) * 0.8)
      ? (Number(price) * 0.8).toString()
      : (Number(price) * 0.8).toFixed(2).toString(),
  );
  const [closingCosts, setClosingCosts] = React.useState<string>('500');
  const [financingCosts, setFinancingCosts] = React.useState<string>('400');
  const [otherCosts, setOtherCosts] = React.useState<string>('100');
  const [totalNeeded, setTotalNeeded] = React.useState<string>('');

  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const amountFinancedValue = Number(afterRepairValue) * 0.8;
    const downPaymentValue = Number(afterRepairValue) * 0.2;

    setAmountFinanced(
      Number.isInteger(amountFinancedValue)
        ? amountFinancedValue.toString()
        : amountFinancedValue.toFixed(2).toString(),
    );
    props.setDownPayment(
      Number.isInteger(downPaymentValue)
        ? downPaymentValue.toString()
        : downPaymentValue.toFixed(2).toString(),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [afterRepairValue]);

  React.useEffect(() => {
    const purchaseCostsValue =
      Number(closingCosts) + Number(financingCosts) + Number(otherCosts);

    props.setPurchaseCosts(
      Number.isInteger(purchaseCostsValue)
        ? purchaseCostsValue.toString()
        : purchaseCostsValue.toFixed(2).toString(),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closingCosts, financingCosts, otherCosts]);

  React.useEffect(() => {
    const totalCashNeededValue =
      Number(props.downPayment) +
      Number(props.purchaseCosts) +
      Number(props.rehabCosts);
    setTotalNeeded(
      Number.isInteger(totalCashNeededValue)
        ? totalCashNeededValue.toString()
        : totalCashNeededValue.toFixed(2).toString(),
    );
  }, [props.downPayment, props.purchaseCosts, props.rehabCosts]);

  return (
    <Table sx={{ width: '53%' }}>
      {props.selectedProperty &&
        Object.values(props.selectedProperty).map((value, id) => (
          <TableBody key={id}>
            {renderRowStatic('Price:', `${value.price} €`)}
            {renderRowInput(
              'After Repair Value:',
              `${afterRepairValue}`,
              setAfterRepairValue,
            )}
            {renderRowInput(
              'Amount Financed:',
              `${amountFinanced}`,
              setAmountFinanced,
            )}
            <Divider />
            {renderRowInput(
              'Down Payment:',
              `${props.downPayment}`,
              props.setDownPayment,
            )}
            {renderRowCollapsible(
              'Purchase Costs',
              props.purchaseCosts,
              [
                {
                  title: 'Closing Costs',
                  value: closingCosts,
                  setValue: setClosingCosts,
                },
                {
                  title: 'Financing Costs',
                  value: financingCosts,
                  setValue: setFinancingCosts,
                },
                {
                  title: 'Other Costs',
                  value: otherCosts,
                  setValue: setOtherCosts,
                },
              ],
              open,
              setOpen,
            )}
            {renderRowInput(
              'Rehab Costs:',
              `${props.rehabCosts}`,
              props.setRehabCosts,
            )}
            <Divider />
            {renderRowStatic('Total Cash Needed:', `${totalNeeded} €`)}
          </TableBody>
        ))}
    </Table>
  );
}

export default ChartDataTable;
