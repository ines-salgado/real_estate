export type TableType = 'comparTable' | 'afforTable' | 'profTable';

// compar table
export const comparTableOrderedRows = [
  'AVG Price (Sell)',
  'AVG Price per m² (Sell)',
  'Properties Sold (Sell)',
  'AVG Price (Rent)',
  'AVG Price per m² (Rent)',
  'Properties Sold (Rent)',
  'Price-to-Rent Ratio',
  'Market Value',
  '1 Year Performance',
  'Potential Yield',
];
export const comparTableOrderedKeys = ['Location', ...comparTableOrderedRows];

// affor table
export const afforTableOrderedRows = [
  'Affordability Score',
  'Affordability Rank',
];
export const afforTableOrderedKeys = ['Location', ...afforTableOrderedRows];

// prof table
export const profTableOrderedRows = [
  'Profitability Score',
  'Profitability Rank',
];
export const profTableOrderedKeys = ['Location', ...profTableOrderedRows];
