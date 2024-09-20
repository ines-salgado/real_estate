interface DashboardData {
  keyInd: {
    title: {
      Date: number;
      Value: number;
      'Percentage Change': number;
    };
  };
  afforTable: [
    {
      'Affordability Rank': number;
      'Affordability Score': number;
      Location: string;
    },
  ];
  comparTable: [
    {
      '1 Year Performance': number;
      'AVG Price (Rent)': number;
      'AVG Price (Sell)': number;
      'AVG Price per m² (Rent)': number;
      'Affordability Rank': number;
      'Affordability Score': number;
      Location: string;
      'Market Value': string;
      'Potential Yield': number;
      'Price-to-Rent Ratio': number;
      'Profitability Rank': number;
      'Profitability Score': number;
      'Properties Sold (Rent)': number;
      'Properties Sold (Sell)': number;
    },
  ];

  profTable: [
    {
      Location: string;
      'Profitability Rank': number;
      'Profitability Score': number;
    },
  ];
}

export default DashboardData;
