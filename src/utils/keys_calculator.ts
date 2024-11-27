function calcularIndicadores(
  purchasePrice: number,
  closingCosts: number,
  downPayment: number,
  rehabCosts: number,
  cashFlow: number,
) {
  const totalProjectCosts = purchasePrice + closingCosts + rehabCosts;
  const initialCapitalInvested = downPayment + closingCosts + rehabCosts;

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
