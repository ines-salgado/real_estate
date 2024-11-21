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
  } = props;

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Table sx={{ width: '60%' }}>
      {selectedProperty &&
        Object.values(selectedProperty).map((value, id) => (
          <TableBody key={id}>
            {renderRowStatic('Price:', `${value.price} €`)}
            {renderRowInput(
              'After Repair Value:',
              `${afterRepairValue}`,
              (val: string) => onChange('afterRepairValue', val),
            )}
            {renderRowInput(
              'Amount Financed:',
              `${amountFinanced}`,
              (val: string) => onChange('amountFinanced', val),
            )}
            <Divider />
            {renderRowInput('Down Payment:', `${downPayment}`, (val: string) =>
              onChange('downPayment', val),
            )}
            {renderRowCollapsible(
              'Purchase Costs',
              `${purchaseCosts}`,
              [
                {
                  title: 'Closing Costs',
                  value: closingCosts,
                  setValue: (val: string) => onChange('closingCosts', val),
                },
                {
                  title: 'Financing Costs',
                  value: financingCosts,
                  setValue: (val: string) => onChange('financingCosts', val),
                },
                {
                  title: 'Other Costs',
                  value: otherCosts,
                  setValue: (val: string) => onChange('otherCosts', val),
                },
              ],
              open,
              setOpen,
            )}
            {renderRowInput('Rehab Costs:', `${rehabCosts}`, (val: string) =>
              onChange('rehabCosts', val),
            )}
            <Divider />
            {renderRowStatic('Total Cash Needed:', `${totalNeeded} €`)}
          </TableBody>
        ))}
    </Table>
  );
}

export default PurchaseAndRehabTable;
