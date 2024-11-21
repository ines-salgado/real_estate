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
  } = props;

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Table sx={{ width: '60%' }}>
      {selectedProperty &&
        Object.values(selectedProperty).map((_value, id) => (
          <TableBody key={id}>
            {renderRowInput('Gross Rent:', `${grossRent}`, (val: string) =>
              onChange('grossRent', val),
            )}
            {renderRowInput('Vacancy:', `${vacancy}`, (val: string) =>
              onChange('vacancy', val),
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
                  setValue: (val: string) => onChange('imi', val),
                },
                {
                  title: 'Stamp Duty (IS):',
                  value: is,
                  setValue: (val: string) => onChange('is', val),
                },
                {
                  title: 'Insurance:',
                  value: insurance,
                  setValue: (val: string) => onChange('insurance', val),
                },
                {
                  title: 'Condominium:',
                  value: condominium,
                  setValue: (val: string) => onChange('condominium', val),
                },
                {
                  title: 'Maintenance:',
                  value: maintenance,
                  setValue: (val: string) => onChange('maintenance', val),
                },
                {
                  title: 'Other Costs:',
                  value: others,
                  setValue: (val: string) => onChange('others', val),
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
