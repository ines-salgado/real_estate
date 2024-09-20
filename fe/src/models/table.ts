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

type TableDataType = keyof TableData;

interface HeadCell {
  disablePadding: boolean;
  index: TableDataType;
  label: string;
  numeric: boolean;
}

export { type TableDataType, type HeadCell };
