import Vehicle from '../../../src/models/Vehicle';
import RegularSuv from '../../../src/models/vehicles/RegularSUV';

describe('Testing RegularSUV class', () => {
  let regSuv: Vehicle;

  beforeAll(() => {
    regSuv = new RegularSuv();
  });

  test('vehicle type is "SUV"', () => {
    expect(regSuv.getVehicleType()).toBe('SUV');
  });

  test('vehicle max slots are "2"', () => {
    expect(regSuv.getMaxSlotsInTrack()).toBe(2);
  });

  test('vehicle fee per hour is "200"', () => {
    expect(regSuv.getFeePerHour()).toBe(200);
  });
});
