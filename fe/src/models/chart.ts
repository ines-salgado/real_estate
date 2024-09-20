interface CostsData {
  name: string;
  amount: string;
  data: {
    name: string;
    amount: string;
  }[];
}

interface RowData {
  name: string;
  amount: string;
  inputData: { name: string; value: string }[];
  purchaseCosts: CostsData;
  rehabCosts: CostsData;
}

// mock data
function createData(): RowData {
  return {
    name: 'Frozen yoghurt',
    amount: '159',
    inputData: [
      { name: 'Loan Years', value: '30 years' },
      { name: 'Interest Rate', value: '8%' },
    ],
    purchaseCosts: {
      name: 'Purchase Costs',
      amount: '159',
      data: [
        {
          name: 'nosso quadro',
          amount: '4',
        },
        {
          name: 'nosso quadro',
          amount: '4',
        },
      ],
    },
    rehabCosts: {
      name: 'Rehab Costs',
      amount: '159',
      data: [
        {
          name: 'alibi',
          amount: '4',
        },
        {
          name: 'alibi',
          amount: '4',
        },
      ],
    },
  };
}

export { type RowData, type CostsData, createData };
