import IRecord from './IRecord';
import Track from './ITrack';

export default interface IRevenueCalculator {
  _getBookingRevenue(records: IRecord[]): number;

  _getAdditionalRevenue(records: IRecord[]): number;

  _getTrackTotalRevenue(track: Track, records: IRecord[]): number;
}
