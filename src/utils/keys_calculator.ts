function calcularIndicadores(
  purchasePrice: number, // selectedProperty?.price
  closingCosts: number, // purchaseState.closingCosts
  downPayment: number, // selectedProperty?.price / 5
  rehabCosts: number, // purchaseState.rehabCosts
  grossRent: number, // cashFlowState.grossRent
  operatingExpenses: number, // cashFlowState.operatingExpenses
  amountFinanced: number, // purchaseState.amountFinanced
  loanYears: number, // financingState.loanYears
  annualInterestRate: number, // financingState.taeg
  cashFlow: number,
) {
  const totalProjectCosts = purchasePrice + closingCosts + rehabCosts;
  const initialCapitalInvested = downPayment + closingCosts + rehabCosts;

  const monthlyRate = annualInterestRate / 12 / 100; // Monthly interest rate
  const totalMonths = loanYears * 12;
  const monthlyLoanPayment =
    (amountFinanced * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const annualLoanPayment = monthlyLoanPayment * 12;

  const annualRentIncome = grossRent * 12;
  const annualOperatingExpenses = operatingExpenses * 12;

  // const annualCashFlow =
  //   annualRentIncome - annualLoanPayment - annualOperatingExpenses;

  const roi =
    totalProjectCosts !== 0 ? (cashFlow / totalProjectCosts) * 100 : null;

  const cashOnCashReturn =
    initialCapitalInvested !== 0
      ? (cashFlow / initialCapitalInvested) * 100
      : null;

  const paybackPeriod =
    cashFlow !== 0 ? initialCapitalInvested / cashFlow : null;

  return {
    ROI: roi,
    'Cash Flow (Annual)': cashFlow,
    'Cash on Cash': cashOnCashReturn,
    'Initial Capital': initialCapitalInvested,
    'Payback (Years)': paybackPeriod,
  };
}

export { calcularIndicadores };
