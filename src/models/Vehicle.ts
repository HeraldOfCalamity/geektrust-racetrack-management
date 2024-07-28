export default abstract class Vehicle {
  protected _currentTrackSlots: number;

  public constructor() {
    this._currentTrackSlots = 0;
  }

  public abstract getVehicleType(): string;

  public abstract getFeePerHour(): number;

  public abstract getMaxSlotsInTrack(): number;

  public get currentTrackSlots(): number {
    return this._currentTrackSlots;
  }

  public set currentTrackSlots(currentSlots: number) {
    this._currentTrackSlots = currentSlots;
  }
}
