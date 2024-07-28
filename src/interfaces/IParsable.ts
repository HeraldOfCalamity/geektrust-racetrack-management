export default interface IParsable {
  parseTo<T, U>(item: T): U;
}

// Check interface behavior
