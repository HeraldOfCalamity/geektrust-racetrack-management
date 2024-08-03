import Vehicle from '../../../src/models/Vehicle';
import RegularBike from '../../../src/models/vehicles/RegularBike';

describe('Testing RegularBike class', () => {
  let regBike: Vehicle;

  beforeAll(() => {
    regBike = new RegularBike();
  });

  test('vehicle type is "BIKE"', () => {
    expect(regBike.getVehicleType()).toBe('BIKE');
  });

  test('vehicle fee per hour is "60"', () => {
    expect(regBike.getFeePerHour()).toBe(60);
  });

  test('vehicle max slots are "4"', () => {
    expect(regBike.getMaxSlotsInTrack()).toBe(4);
  });
});
