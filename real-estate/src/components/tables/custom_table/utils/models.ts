interface Data {
  id: number;
  calories: number;
  carbs: number;
  name: string;
  fat: number;
  protein: number;
  calories1: number;
  fat1: number;
  carbs1: number;
  protein1: number;
}

interface SmallData {
  id: number;
  calories: number;
  carbs: number;
  name: string;
}

type DataType = keyof Data | keyof SmallData;

interface HeadCell {
  disablePadding: boolean;
  id: DataType;
  label: string;
  numeric: boolean;
}

export { type DataType, type Data, type SmallData, type HeadCell };
