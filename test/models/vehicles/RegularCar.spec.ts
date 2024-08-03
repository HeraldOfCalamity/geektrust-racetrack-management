import Vehicle from '../../../src/models/Vehicle';
import RegularCar from '../../../src/models/vehicles/RegularCar';

describe('Testing RegularCar class', () => {
  let regCar: Vehicle;

  beforeAll(() => {
    regCar = new RegularCar();
  });

  test('vehicle fee per hour is "120"', () => {
    expect(regCar.getFeePerHour()).toBe(120);
  });

  test('vehicle type is "CAR"', () => {
    expect(regCar.getVehicleType()).toBe('CAR');
  });

  test('vehicle max slots are "2"', () => {
    expect(regCar.getMaxSlotsInTrack()).toBe(2);
  });
});
