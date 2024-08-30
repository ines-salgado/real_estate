interface TableData {
  index: number;
  location: string;
  mediumPrice: number;
  mediumPriceBySquare: number;
  totalStock: number;
  mediumMarketTime: number;
  mediumPriceOfRenting: number;
  mediumPriceBySquareOfRenting: number;
  totalStockOfRenting: number;
  mediumMarketTimeOfRenting: number;
  marketValue: number;
  yieldInd: number;
  marketValueCategory: string;
  codLocation: string;
}

interface SmallTableData {
  index: number;
  location: string;
  mediumPrice: number;
  mediumPriceBySquare: number;
}

type TableDataType = keyof TableData | keyof SmallTableData;

interface HeadCell {
  disablePadding: boolean;
  index: TableDataType;
  label: string;
  numeric: boolean;
}

export { type TableDataType, type HeadCell };
