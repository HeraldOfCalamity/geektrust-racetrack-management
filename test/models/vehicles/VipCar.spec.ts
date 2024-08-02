import VipCar from '../../../src/models/vehicles/VipCar';

describe('testing VipCar class', () => {
  let vipCar: VipCar;

  beforeAll(() => {
    vipCar = new VipCar();
  });

  test('vehicle type is "CAR"', () => {
    expect(vipCar.getVehicleType()).toBe('CAR');
  });

  test('vehicle fee per hour is "250"', () => {
    expect(vipCar.getFeePerHour()).toBe(250);
  });

  test('vehicle max slots are "1"', () => {
    expect(vipCar.getMaxSlotsInTrack()).toBe(1);
  });
});
