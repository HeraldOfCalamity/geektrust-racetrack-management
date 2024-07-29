import IRecord from '../interfaces/IRecord';
import IRevenueCalculator from '../interfaces/IRevenueCalculator';
import ITrack from '../interfaces/ITrack';

export default class TrackManRevCal implements IRevenueCalculator {
  public getBookingRevenue(records: IRecord[]): number {
    throw new Error('Method not implemented.');
  }
  public getAdditionalRevenue(records: IRecord[]): number {
    throw new Error('Method not implemented.');
  }
  public getTrackTotalRevenue(track: ITrack, records: IRecord[]): number {
    throw new Error('Method not implemented.');
  }
}
