import { ICollectionInfo, Predicate } from '../interfaces/ICollectionInfo';

export default class ChildrenInfoCollector implements ICollectionInfo {
  public searchItem<T>(collection: T[], pred: Predicate): T | -1 {
    throw new Error('Method not implemented.');
  }
  public filterCollection<T>(collection: T[], pred: Predicate): T[] {
    throw new Error('Method not implemented.');
  }
}
