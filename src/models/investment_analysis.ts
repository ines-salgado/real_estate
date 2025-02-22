interface InvestmentAnalysisData {
  propertyMarketData: Array<{
    title: string;
    mainImage: string;
    bedrooms_value: number;
    bathrooms_value: number;
    area_value: string;
    price: number;
    'sale-price-per-sqm_value': string;
    'days-on-market_value': string;
    'new-rental-yield_value': string;
    localizacao: string;
    'energy-rating-estate-page_value': string;
    'last-price-change_value': string | null;
    combined_features: string[];
    label: string;
    'sale-status_value': string;
    id: number;
    'new-rental-yield-average-rent-price_value': string;
    'construction-year_value': string;
    path: string;
    codlocation: string;
    'Avaliacoes Total': number;
    'Avaliacoes Apartamentos': number;
    'Avaliacoes Moradias': number;
    'Capital Divida Total': number;
    'Capital Divida 3M': number;
    'Capital Divida 6M': number;
    'Capital Divida 12M': number;
    'Juros Totais': number;
    'Capital Amortizado': number;
    'População desempregada com idade entre 16 e 74 anos (N.º) por Grupo etário; Mensal (2)': number;
    PrestacaoMedia: number;
    Mês: number;
    Ano: number;
    '1 mês (Euribor)': number;
    '3 meses (Euribor)': number;
    '6 meses (Euribor)': number;
    '12 meses (Euribor)': number;
    'Número de beneficiários de subsídio de desemprego (milhares)-mensal': number;
    'Indicador coincidente para a atividade económica-Mensal-TVH': number;
    'Indicador coincidente para o consumo privado-Mensal-TVH': number;
    'Endividamento dos particulares-TVA': number;
    'Endividamento dos particulares': number;
    'Endividamento dos particulares junto de empresas não financeiras': number;
    'Endividamento dos particulares junto do setor financeiro': number;
    'Endividamento dos particulares junto das administrações públicas': number;
    'Endividamento dos particulares junto de particulares': number;
    'Endividamento dos particulares junto do resto do mundo': number;
    'Desemprego registado no final do período-Total-Mensal': number;
    'Desemprego registado ao longo do período-Total-Mensal': number;
    'IPC total-taxa de variação homóloga': number;
    'IPC total-taxa de variação em cadeia': number;
    'IPC total (taxa de inflação média anual)-TVMM12': number;
    'Taxa de juro (TAA) do stock de empréstimos às empresas não financeiras': number;
    'TAEG de novos empréstimos ao consumo': number;
    'TAEG de novos empréstimos à habitação': number;
    'Taxa de juro (TAA) de novos empréstimos para outros fins': number;
    'Taxa de juro (TAA) de novos empréstimos ao consumo': number;
    'Taxa de juro (TAA) de novos empréstimos à habitação': number;
    'Taxa de juro (TAA) de novos empréstimos aos particulares': number;
    'Taxa de juro (TAA) de novos empréstimos acima de 1M€ às empresas não financeiras': number;
    'Taxa de juro (TAA) de novos empréstimos até 1M€ às empresas não financeiras': number;
    'Taxa de juro (TAA) de novos empréstimos às empresas não financeiras': number;
    dia: number;
    codLocation: string;
    Data: number;
    'Preço médio_sell': number;
    'Preço médio por m2_sell': number;
    'Preço médio de fechamento (BETA)_sell': number;
    'Preço médio de fechamento por m2 (BETA)_sell': number;
    'Subida de preço_sell': number;
    'Redução de preço_sell': number;
    'Novas propriedades únicas_sell': number;
    'Propriedades vendida e retiradas_sell': number;
    'Novas listagens não desduplicadas_sell': number;
    'Preço médio_rent': number;
    'Preço médio por m2_rent': number;
    'Preço médio de fechamento (BETA)_rent': number;
    'Preço médio de fechamento por m2 (BETA)_rent': number;
    'Subida de preço_rent': number;
    'Redução de preço_rent': number;
    'Novas propriedades únicas_rent': number;
    'Propriedades vendida e retiradas_rent': number;
    'Novas listagens não desduplicadas_rent': number;
    Dayi: number;
    Monthi: number;
    Yeari: number;
    Date: string;
    moving_avg_price_sell: number;
    exp_moving_avg_price_sell: number;
    price_to_rent_ratio: number;
    propriedades_unicas_rent: number;
    propriedades_unicas_sell: number;
    moving_avg_price_rent: number;
    exp_moving_avg_price_rent: number;
    moving_avg_Reducao_sell: number;
    moving_avg_Reducao_rent: number;
  }>;
  keyInd: {
    ROI: number | null;
    'Cash Flow (Annual)': number;
    // cashflowMensal: cashflowMensal,
    'Cash on Cash': number | null;
    'Initial Capital': number;
    // capRatePercent: capRate,
    // noiAnual: noiAnual,
    // dscr: dscr,
    'Payback (Years)': number | null;
    // grm: number | null;
    // ganhoNaCompra: number;
  };
}

export default InvestmentAnalysisData;
