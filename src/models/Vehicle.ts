export default abstract class Vehicle {
  protected _currentTrackSlots: number;

  public constructor() {
    this._currentTrackSlots = 0;
  }

  public set currentTrackSlots(currentSlots: number) {
    this._currentTrackSlots = currentSlots;
  }

  public get currentTrackSlots(): number {
    return this._currentTrackSlots;
  }

  public reduceSlotsInOne(): void {
    this._currentTrackSlots -= 1;
  }

  public incrementSlotsInOne(): void {
    throw new Error('Method not implemented.');
  }

  public abstract getVehicleType(): string;

  public abstract getFeePerHour(): number;

  public abstract getMaxSlotsInTrack(): number;
}
