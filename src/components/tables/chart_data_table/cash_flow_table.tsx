/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { Divider, Table, TableBody } from '@mui/material';
import { InvestmentAnalysisData } from '../../../models';
import { renderRowInput, renderRowStatic, renderRowCollapsible } from './utils';

interface Props {
  selectedProperty: InvestmentAnalysisData['propertyMarketData'];
  grossRent: string;
  vacancy: string;
  operatingIncome: string;
  operatingExpenses: string;
  imi: string;
  is: string;
  insurance: string;
  condominium: string;
  maintenance: string;
  others: string;
  loanPayment: string;
  cashFlow: string;
  onChange: (field: string, value: string) => void;
  formatNumber: (value: number[] | number) => string;
}

function CashFlowTable(props: Props) {
  const {
    selectedProperty,
    grossRent,
    vacancy,
    operatingIncome,
    operatingExpenses,
    imi,
    is,
    insurance,
    condominium,
    maintenance,
    others,
    loanPayment,
    cashFlow,
    onChange,
    formatNumber,
  } = props;

  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const vacancyValue = Number(props.grossRent) * 0.08;
    onChange('vacancy', formatNumber(vacancyValue));

    const operationIncomeValue = Number(grossRent) - Number(vacancy);
    onChange('operationIncome', formatNumber(operationIncomeValue));
  }, [vacancy, operatingIncome]);

  React.useEffect(() => {
    const isValue = Number(grossRent) * 0.1;
    onChange('is', formatNumber(isValue));

    const operatingExpensesValue =
      Number(imi) +
      Number(is) +
      Number(insurance) +
      Number(condominium) +
      Number(maintenance) +
      Number(others);
    onChange('operatingExpenses', formatNumber(operatingExpensesValue));
  }, [imi, is, insurance, condominium, maintenance, others]);

  React.useEffect(() => {
    const cashFlowValue =
      Number(operatingIncome) - Number(operatingExpenses) - Number(loanPayment);
    onChange('cashFlow', formatNumber(cashFlowValue));
  }, [operatingIncome, operatingExpenses, loanPayment]);

  return (
    <Table sx={{ width: '60%' }}>
      {selectedProperty &&
        Object.values(selectedProperty).map((_value, id) => (
          <TableBody key={id}>
            {renderRowInput('Gross Rent:', `${grossRent}`, (val: string) =>
              props.onChange('grossRent', val),
            )}
            {renderRowInput('Vacancy:', `${vacancy}`, (val: string) =>
              props.onChange('vacancy', val),
            )}
            <Divider />
            {renderRowStatic('Operating Income:', `${operatingIncome} €`)}
            {renderRowCollapsible(
              'Operating Expenses:',
              `${operatingExpenses}`,
              [
                {
                  title: 'Property Tax (IMI):',
                  value: imi,
                  setValue: (val: string) => props.onChange('imi', val),
                },
                {
                  title: 'Stamp Duty (IS):',
                  value: is,
                  setValue: (val: string) => props.onChange('is', val),
                },
                {
                  title: 'Insurance:',
                  value: insurance,
                  setValue: (val: string) => props.onChange('insurance', val),
                },
                {
                  title: 'Condominium:',
                  value: condominium,
                  setValue: (val: string) => props.onChange('condominium', val),
                },
                {
                  title: 'Maintenance:',
                  value: maintenance,
                  setValue: (val: string) => props.onChange('maintenance', val),
                },
                {
                  title: 'Other Costs:',
                  value: others,
                  setValue: (val: string) => props.onChange('others', val),
                },
              ],
              open,
              setOpen,
            )}
            {renderRowStatic('Loan Payment:', `${loanPayment} €`)}
            <Divider />
            {renderRowStatic('Cash Flow:', `${cashFlow} €`)}
          </TableBody>
        ))}
    </Table>
  );
}

export default CashFlowTable;
