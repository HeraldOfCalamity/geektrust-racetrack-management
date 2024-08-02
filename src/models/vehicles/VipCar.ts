import Vehicle from '../Vehicle';

export default class VipCar extends Vehicle {
  public getVehicleType(): string {
    return 'CAR';
  }
  public getFeePerHour(): number {
    return 250;
  }
  public getMaxSlotsInTrack(): number {
    return 1;
  }
}
