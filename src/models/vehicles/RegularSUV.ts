import Vehicle from '../Vehicle';

export default class RegularSUV extends Vehicle {
  public getVehicleType(): string {
    return 'SUV';
  }
  public getFeePerHour(): number {
    return 200;
  }
  public getMaxSlotsInTrack(): number {
    return 2;
  }
}
