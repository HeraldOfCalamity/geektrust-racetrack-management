import Vehicle from '../Vehicle';

export default class RegularCar extends Vehicle {
  public getVehicleType(): string {
    return 'CAR';
  }
  public getFeePerHour(): number {
    return 120;
  }
  public getMaxSlotsInTrack(): number {
    return 2;
  }
}
