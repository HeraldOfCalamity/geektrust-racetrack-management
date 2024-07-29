import IRecord from './IRecord';
import Track from './ITrack';

export default interface IRevenueCalculator {
  getBookingRevenue(records: IRecord[]): number;

  getAdditionalRevenue(records: IRecord[]): number;

  getTrackTotalRevenue(track: Track, records: IRecord[]): number;
}
