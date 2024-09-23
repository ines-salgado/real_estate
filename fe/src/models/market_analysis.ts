interface MarketAnalysisData {
  keyInd: {
    location: {
      title: {
        values: number;
        percentages: number;
      };
      values: {
        'Pre\u00e7o m\u00e9dio_sell': number;
        'Novas propriedades \u00fanicas_sell': number;
        'Propriedades vendida e retiradas_sell': number;
        'Pre\u00e7o m\u00e9dio_rent': number;
        'Novas propriedades \u00fanicas_rent': number;
        'Propriedades vendida e retiradas_rent': number;
      };
      percentages: {
        'Pre\u00e7o m\u00e9dio_sell': number;
        'Novas propriedades \u00fanicas_sell': number;
        'Propriedades vendida e retiradas_sell': number;
        'Pre\u00e7o m\u00e9dio_rent': number;
        'Novas propriedades \u00fanicas_rent': number;
        'Propriedades vendida e retiradas_rent': number;
      };
    };
  };
  sellRentOverTime: {
    id: {
      Date: string;
      codLocation: string;
      'Pre\u00e7o m\u00e9dio_sell': number;
      'Pre\u00e7o m\u00e9dio_rent': number;
      localizacao: string;
    };
  };
  marketPhaseTrendsYearly: {
    id: {
      Year: number;
      'Pre\u00e7o m\u00e9dio_sell': number;
      'Propriedades vendida e retiradas_sell': number;
      'Price Change (%)': number;
      'Transaction Change (%)': number;
    };
  };
  marketDynamics: Array<{
    Date: string;
    localizacao: string;
    'Subida de pre\u00e7o_sell': number;
    'Redu\u00e7\u00e3o de pre\u00e7o_sell': number;
    'Novas propriedades \u00fanicas_sell': number;
    'Propriedades vendida e retiradas_sell': number;
    'Subida de pre\u00e7o_rent': number;
    'Redu\u00e7\u00e3o de pre\u00e7o_rent': number;
    'Novas propriedades \u00fanicas_rent': number;
    'Propriedades vendida e retiradas_rent': number;
    'Popula\u00e7\u00e3o desempregada com idade entre 16 e 74 anos (N.\u00ba) por Grupo et\u00e1rio; Mensal (2) ': number;
    'N\u00famero de benefici\u00e1rios de subs\u00eddio de desemprego (milhares)-mensal': number;
    'Desemprego registado no final do per\u00edodo-Total-Mensal': number;
    'Desemprego registado ao longo do per\u00edodo-Total-Mensal': number;
    '1 m\u00eas (Euribor)': number;
    '3 meses (Euribor)': number;
    '6 meses (Euribor)': number;
    '12 meses (Euribor)': number;
    'Endividamento dos particulares-TVA': number;
    'Endividamento dos particulares': number;
    'Endividamento dos particulares junto de empresas n\u00e3o financeiras': number;
  }>;
}

export default MarketAnalysisData;
