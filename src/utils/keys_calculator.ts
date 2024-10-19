function calcularIndicadores(
  precoCompra: number,
  custosEscritura: number,
  entrada: number,
  custosReparacao: number,
  avaliacaoVPT: number,
  valorFinanciado: number,
  prazoAnos: number,
  tanAnual: number,
  rendaMensal: number,
  totalDespesasMensais: number,
) {
  const custosTotaisProjeto = precoCompra + custosEscritura + custosReparacao;

  const capitalInicialInvestido = entrada + custosEscritura + custosReparacao;

  const n = prazoAnos * 12;
  const r = tanAnual / 12 / 100; // Converter TAN anual para decimal mensal
  const P = valorFinanciado;
  const prestacaoMensal =
    (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  const prestacaoAnual = prestacaoMensal * 12;

  const rendaAnual = rendaMensal * 12;

  const despesasAnuais = totalDespesasMensais * 12;

  const cashflowAnual = rendaAnual - prestacaoAnual - despesasAnuais;

  const cashflowMensal = cashflowAnual / 12;

  const roi =
    custosTotaisProjeto !== 0
      ? (cashflowAnual / custosTotaisProjeto) * 100
      : null;

  const cashOnCashReturn =
    capitalInicialInvestido !== 0
      ? (cashflowAnual / capitalInicialInvestido) * 100
      : null;

  const noiAnual = rendaAnual - despesasAnuais; // Não inclui prestação do empréstimo

  const capRate = avaliacaoVPT !== 0 ? (noiAnual / avaliacaoVPT) * 100 : null;

  const dscr = prestacaoAnual !== 0 ? noiAnual / prestacaoAnual : null;

  const paybackPeriod =
    cashflowAnual !== 0 ? capitalInicialInvestido / cashflowAnual : null;

  const grm = rendaAnual !== 0 ? precoCompra / rendaAnual : null;

  const ganhoNaCompra = avaliacaoVPT - custosTotaisProjeto;

  const indicadores = {
    ROI: roi,
    'Cash Flow': cashflowAnual,
    // cashflowMensal: cashflowMensal,
    'Cash on Cash': cashOnCashReturn,
    'Initial Capital': capitalInicialInvestido,
    // capRatePercent: capRate,
    // noiAnual: noiAnual,
    // dscr: dscr,
    'Payback (Years)': paybackPeriod,
    // grm: grm,
    // ganhoNaCompra: ganhoNaCompra,
  };

  return indicadores;
}

export { calcularIndicadores };
