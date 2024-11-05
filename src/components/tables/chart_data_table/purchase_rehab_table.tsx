/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { Divider, Table, TableBody } from '@mui/material';
import { InvestmentAnalysisData } from '../../../models';
import { renderRowInput, renderRowStatic, renderRowCollapsible } from './utils';

interface Props {
  selectedProperty: InvestmentAnalysisData['propertyMarketData'];
  afterRepairValue: string;
  amountFinanced: string;
  downPayment: string;
  purchaseCosts: string;
  rehabCosts: string;
  closingCosts: string;
  financingCosts: string;
  otherCosts: string;
  totalNeeded: string;
  onChange: (field: string, value: string) => void;
  formatNumber: (value: number[] | number) => string;
}

function PurchaseAndRehabTable(props: Props) {
  const {
    selectedProperty,
    afterRepairValue,
    amountFinanced,
    downPayment,
    purchaseCosts,
    rehabCosts,
    closingCosts,
    financingCosts,
    otherCosts,
    totalNeeded,
    onChange,
    formatNumber,
  } = props;

  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const amountFinancedValue = Number(afterRepairValue) * 0.8;
    const downPaymentValue = Number(afterRepairValue) * 0.2;

    onChange('amountFinanced', formatNumber(amountFinancedValue));
    onChange('downPayment', formatNumber(downPaymentValue));
  }, [afterRepairValue]);

  React.useEffect(() => {
    const purchaseCostsValue =
      Number(closingCosts) + Number(financingCosts) + Number(otherCosts);

    onChange('purchaseCosts', formatNumber(purchaseCostsValue));
  }, [closingCosts, financingCosts, otherCosts]);

  React.useEffect(() => {
    const totalCashNeededValue =
      Number(downPayment) + Number(purchaseCosts) + Number(rehabCosts);
    onChange('totalNeeded', formatNumber(totalCashNeededValue));
  }, [downPayment, purchaseCosts, rehabCosts]);

  return (
    <Table sx={{ width: '60%' }}>
      {selectedProperty &&
        Object.values(selectedProperty).map((value, id) => (
          <TableBody key={id}>
            {renderRowStatic('Price:', `${value.price} €`)}
            {renderRowInput(
              'After Repair Value:',
              `${afterRepairValue}`,
              (val: string) => props.onChange('afterRepairValue', val),
            )}
            {renderRowInput(
              'Amount Financed:',
              `${amountFinanced}`,
              (val: string) => props.onChange('amountFinanced', val),
            )}
            <Divider />
            {renderRowInput('Down Payment:', `${downPayment}`, (val: string) =>
              props.onChange('downPayment', val),
            )}
            {renderRowCollapsible(
              'Purchase Costs',
              `${purchaseCosts}`,
              [
                {
                  title: 'Closing Costs',
                  value: closingCosts,
                  setValue: (val: string) =>
                    props.onChange('closingCosts', val),
                },
                {
                  title: 'Financing Costs',
                  value: financingCosts,
                  setValue: (val: string) =>
                    props.onChange('financingCosts', val),
                },
                {
                  title: 'Other Costs',
                  value: otherCosts,
                  setValue: (val: string) => props.onChange('otherCosts', val),
                },
              ],
              open,
              setOpen,
            )}
            {renderRowInput('Rehab Costs:', `${rehabCosts}`, (val: string) =>
              props.onChange('rehabCosts', val),
            )}
            <Divider />
            {renderRowStatic('Total Cash Needed:', `${totalNeeded} €`)}
          </TableBody>
        ))}
    </Table>
  );
}

export default PurchaseAndRehabTable;
