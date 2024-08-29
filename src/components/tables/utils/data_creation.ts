import { Data, SmallData } from './models';

// Functions for mock data creation
function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  calories1: number,
  fat1: number,
  carbs1: number,
  protein1: number,
): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
    calories1,
    fat1,
    carbs1,
    protein1,
  };
}

function createSmallTableData(
  id: number,
  name: string,
  calories: number,
  carbs: number,
): SmallData {
  return {
    id,
    name,
    calories,
    carbs,
  };
}

export { createData, createSmallTableData };
