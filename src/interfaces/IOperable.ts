export default interface IOperable<T> {
  add(a: T, b: T): T;

  substract(a: T, b: T): T;
}
