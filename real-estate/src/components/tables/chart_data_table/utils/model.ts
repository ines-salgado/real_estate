interface RowData {
  name: string;
  amount: string;
  inputData: { name: string; value: string }[];
  purchaseCosts: {
    name: string;
    amount: string;
  }[];
  rehabCosts: {
    name: string;
    amount: string;
  }[];
}

function createData(): RowData {
  return {
    name: "Frozen yoghurt",
    amount: "159",
    inputData: [
      { name: "Loan Years", value: "30 years" },
      { name: "Interest Rate", value: "8%" }
    ],
    purchaseCosts: [
      {
        name: "nosso quadro",
        amount: "10"
      },
      {
        name: "nosso quadro",
        amount: "4"
      }
    ],
    rehabCosts: [
      {
        name: "alibi",
        amount: "10"
      },
      {
        name: "alibi",
        amount: "4"
      }
    ]
  };
}

export { type RowData, createData };
