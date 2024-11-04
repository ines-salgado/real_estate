/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { Divider, Table, TableBody } from '@mui/material';
import { InvestmentAnalysisData } from '../../../models';
import { renderRowInput, renderRowStatic } from './utils';

interface Props {
  selectedProperty: InvestmentAnalysisData['propertyMarketData'];
  price: number[];
  purchaseCosts: string;
  amountFinanced: string;
  loanYears: string;
  taeg: string;
  financedCosts: string;
  loanToCost: string;
  monthlyPayment: string;
  mtic: string;
  onChange: (field: string, value: string) => void;
  formatNumber: (value: number[] | number) => string;
}

function FinancingTable(props: Props) {
  const {
    selectedProperty,
    price,
    purchaseCosts,
    amountFinanced,
    loanYears,
    taeg,
    financedCosts,
    loanToCost,
    monthlyPayment,
    mtic,
    onChange,
    formatNumber,
  } = props;

  React.useEffect(() => {
    const loanToCostValue =
      Number(amountFinanced) / (Number(price) + Number(purchaseCosts));
    onChange('loanToCost', formatNumber(loanToCostValue));
  }, [loanToCost, price, purchaseCosts]);

  return (
    <Table sx={{ width: '60%' }}>
      {selectedProperty &&
        Object.values(selectedProperty).map((_value, id) => (
          <TableBody key={id}>
            {renderRowStatic('Amount Financed:', `${amountFinanced} €`)}
            <Divider />
            {renderRowInput('Loan Years:', `${loanYears}`, (val: string) =>
              props.onChange('loanYears', val),
            )}
            {renderRowInput('Taeg:', `${taeg}`, (val: string) =>
              props.onChange('taeg', val),
            )}
            {renderRowInput(
              'Financed Costs:',
              `${financedCosts}`,
              (val: string) => props.onChange('financedCosts', val),
            )}
            {renderRowInput('Loan To Cost:', `${loanToCost}`, (val: string) =>
              props.onChange('loanToCost', val),
            )}
            {renderRowInput(
              'Monthly Payment:',
              `${monthlyPayment}`,
              (val: string) => props.onChange('monthlyPayment', val),
            )}
            <Divider />
            {renderRowStatic('MTIC:', `${mtic} €`)}
          </TableBody>
        ))}
    </Table>
  );
}

export default FinancingTable;
