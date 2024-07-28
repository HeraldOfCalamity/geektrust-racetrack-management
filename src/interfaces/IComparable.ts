type Comparator = 1 | 0 | -1;

export default interface IComparable<T> {
  isBetween(lowerBound: T, upperBound: T): boolean;

  equals(item: T): boolean;

  compareTo(item: T): Comparator;
}
