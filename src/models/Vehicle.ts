export default abstract class Vehicle {
  protected _currentTrackSlots: number;

  protected constructor() {
    this._currentTrackSlots = 0;
  }

  public set currentTrackSlots(currentSlots: number) {
    this._currentTrackSlots = currentSlots;
  }

  public get currentTrackSlots(): number {
    return this._currentTrackSlots;
  }

  public abstract getVehicleType(): string;

  public abstract getFeePerHour(): number;

  public abstract getMaxSlotsInTrack(): number;
}
