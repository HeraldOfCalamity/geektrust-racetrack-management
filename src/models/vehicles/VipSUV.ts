import Vehicle from '../Vehicle';

export default class VipSUV extends Vehicle {
  public getVehicleType(): string {
    return 'SUV';
  }
  public getFeePerHour(): number {
    throw new Error('Method not implemented.');
  }
  public getMaxSlotsInTrack(): number {
    throw new Error('Method not implemented.');
  }
}
