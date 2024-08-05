// Type definition for the Order enum.
type Order = "asc" | "desc";

// Function to compare two objects for sorting.
function descComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

// Function to get the correct comparator for sorting.
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descComparator(a, b, orderBy)
    : (a, b) => -descComparator(a, b, orderBy);
}

// Function to sort an array of objects based on a given key.
function stableSort<T>(array: any[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);

  // Sorting the elements based on the comparator function.
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);

    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

export { type Order, descComparator, getComparator, stableSort };
