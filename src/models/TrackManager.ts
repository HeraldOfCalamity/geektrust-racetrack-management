import { ICollectionInfo } from '../interfaces/ICollectionInfo';
import IRecord from '../interfaces/IRecord';
import IRevenueCalculator from '../interfaces/IRevenueCalculator';
import ITrack from '../interfaces/ITrack';
import ChildrenInfoCollector from './ChildrenInfoCollector';
import Time from './Time';
import TrackManRevCal from './TrackManRevCal';

export type Tuple<T> = [T, T];

export default class TrackManager {
  private _records: IRecord[];

  private _tracks: ITrack[];

  private _activeInterval: Tuple<Time>;

  private _revenueCalculator: IRevenueCalculator;

  private _childrenInfoGatherer: ICollectionInfo;

  public constructor(tracks: ITrack[], activeInterval: Tuple<Time>) {
    this._tracks = tracks;
    this._activeInterval = activeInterval;
    this._records = [];
    this._revenueCalculator = new TrackManRevCal();
    this._childrenInfoGatherer = new ChildrenInfoCollector();
  }

  private addRecord(record: IRecord): void {
    throw new Error('Method not implemented.');
  }

  private isRegistrationTimeValid(time: Time): boolean {
    throw new Error('Method not implemented.');
  }

  public book(
    vehicleType: string,
    vehicleNum: string,
    entryTime: Time
  ): string {
    throw new Error('Method not implemented.');
  }

  public extend(vehicleNum: string, exitTime: Time): string {
    throw new Error('Method not implemented.');
  }
}
