interface DashboardData {
  keyInd: {
    title: {
      Date: number;
      Value: number;
      'Percentage Change': number;
    };
  };
  comparTable: Array<{
    Location: string;
    'AVG Price (Sell)': number;
    'AVG Price per m² (Sell)': number;
    'Properties Sold (Sell)': number;
    'AVG Price (Rent)': number;
    'AVG Price per m² (Rent)': number;
    'Properties Sold (Rent)': number;
    'Price-to-Rent Ratio': number;
    'Market Value': string;
    '1 Year Performance': number;
    'Potential Yield': number;
  }>;
  afforTable: Array<{
    'Affordability Rank': number;
    'Affordability Score': number;
    Location: string;
  }>;
  profTable: Array<{
    Location: string;
    'Profitability Rank': number;
    'Profitability Score': number;
  }>;
}

export default DashboardData;
