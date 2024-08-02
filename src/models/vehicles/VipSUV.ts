import Vehicle from '../Vehicle';

export default class VipSUV extends Vehicle {
  public getVehicleType(): string {
    return 'SUV';
  }
  public getFeePerHour(): number {
    return 300;
  }
  public getMaxSlotsInTrack(): number {
    return 1;
  }
}
