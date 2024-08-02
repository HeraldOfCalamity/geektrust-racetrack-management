export default abstract class Vehicle {
  protected _currentTrackSlots: number;

  public constructor() {
    this._currentTrackSlots = 0;
  }

  public get currentTrackSlots(): number {
    return this._currentTrackSlots;
  }

  public reduceSlotsInOne(): void {
    if (this._currentTrackSlots === 0) {
      throw new Error('There are no slots aviable');
    }
    this._currentTrackSlots--;
  }

  public incrementSlotsInOne(): void {
    if (this.currentTrackSlots === this.getMaxSlotsInTrack()) {
      throw new Error('Max slots reached, cannot increment');
    }
    this._currentTrackSlots++;
  }

  public abstract getVehicleType(): string;

  public abstract getFeePerHour(): number;

  public abstract getMaxSlotsInTrack(): number;
}
