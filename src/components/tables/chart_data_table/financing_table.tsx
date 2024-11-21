import { Divider, Table, TableBody } from '@mui/material';
import { InvestmentAnalysisData } from '../../../models';
import { renderRowInput, renderRowStatic } from './utils';

interface Props {
  selectedProperty: InvestmentAnalysisData['propertyMarketData'];
  amountFinanced: string;
  loanYears: string;
  taeg: string;
  financedCosts: string;
  loanToCost: string;
  monthlyPayment: string;
  mtic: string;
  onChange: (field: string, value: string) => void;
}

function FinancingTable(props: Props) {
  const {
    selectedProperty,
    amountFinanced,
    loanYears,
    taeg,
    financedCosts,
    loanToCost,
    monthlyPayment,
    mtic,
    onChange,
  } = props;

  return (
    <Table sx={{ width: '60%' }}>
      {selectedProperty &&
        Object.values(selectedProperty).map((_value, id) => (
          <TableBody key={id}>
            {renderRowStatic('Amount Financed:', `${amountFinanced} €`)}
            <Divider />
            {renderRowInput('Loan Years:', `${loanYears}`, (val: string) =>
              onChange('loanYears', val),
            )}
            {renderRowInput('Taeg:', `${taeg}`, (val: string) =>
              onChange('taeg', val),
            )}
            {renderRowInput(
              'Financed Costs:',
              `${financedCosts}`,
              (val: string) => onChange('financedCosts', val),
            )}
            {renderRowInput('Loan To Cost:', `${loanToCost}`, (val: string) =>
              onChange('loanToCost', val),
            )}
            {renderRowInput(
              'Monthly Payment:',
              `${monthlyPayment}`,
              (val: string) => onChange('monthlyPayment', val),
            )}
            <Divider />
            {renderRowStatic('MTIC:', `${mtic} €`)}
          </TableBody>
        ))}
    </Table>
  );
}

export default FinancingTable;
