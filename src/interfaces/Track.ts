import Vehicle from '../models/Vehicle';

export default interface Track {
  getTrackType(): string;

  getTrachVehicles(): Vehicle[];
}
