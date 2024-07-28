type Predicate = (...args: unknown[]) => boolean;

export default interface ICollectionInfo {
  searchItem<T>(collection: T[], pred: Predicate): T | -1;

  filterCollection<T>(collection: T[], pred: Predicate): T[];
}
