import Vehicle from '../../../src/models/Vehicle';

export default class BaseVehicle extends Vehicle {
  public constructor() {
    super();
  }
  public getVehicleType(): string {
    return 'BASE_VEHICLE_CLASS';
  }
  public getFeePerHour(): number {
    return -1;
  }
  public getMaxSlotsInTrack(): number {
    return 1;
  }
}

describe('testing Vehicle base class', () => {
  let baseVehicle: Vehicle;

  beforeEach(() => {
    baseVehicle = new BaseVehicle();
  });

  test('current track slots default value is 0', () => {
    expect(baseVehicle.currentTrackSlots).toBe(0);
  });

  test('incrementSlotsInOne increments slots in one', () => {
    expect(baseVehicle.currentTrackSlots).toBeLessThan(
      baseVehicle.getMaxSlotsInTrack()
    );

    const initialValue = baseVehicle.currentTrackSlots;

    baseVehicle.incrementSlotsInOne();

    expect(baseVehicle.currentTrackSlots).toBeGreaterThan(initialValue);
  });

  test('increment slots beyond max slots throws an error', () => {
    expect(baseVehicle.currentTrackSlots).toBe(0);

    baseVehicle.incrementSlotsInOne();

    expect(baseVehicle.currentTrackSlots).toBe(
      baseVehicle.getMaxSlotsInTrack()
    );

    expect(() => baseVehicle.incrementSlotsInOne()).toThrow(
      'Max slots reached, cannot increment'
    );
  });

  test('reduceSlotsInOne reduces slots in one', () => {
    baseVehicle.incrementSlotsInOne();

    expect(baseVehicle.currentTrackSlots).toBeGreaterThan(0);

    const initialValue = baseVehicle.currentTrackSlots;

    baseVehicle.reduceSlotsInOne();

    expect(baseVehicle.currentTrackSlots).toBeLessThan(initialValue);
  });

  test('reduce slots beyond 0 throws an error', () => {
    expect(baseVehicle.currentTrackSlots).toBe(0);

    expect(() => baseVehicle.reduceSlotsInOne()).toThrow(
      'There are no slots aviable'
    );
  });
});
