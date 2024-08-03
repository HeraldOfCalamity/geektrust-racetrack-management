import Vehicle from '../Vehicle';

export default class RegularBike extends Vehicle {
  public getVehicleType(): string {
    return 'BIKE';
  }
  public getFeePerHour(): number {
    return 60;
  }
  public getMaxSlotsInTrack(): number {
    return 4;
  }
}
