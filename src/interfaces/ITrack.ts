import Vehicle from '../models/Vehicle';

export default interface ITrack {
  getTrackType(): string;

  getTrackVehicles(): Vehicle[];
}
