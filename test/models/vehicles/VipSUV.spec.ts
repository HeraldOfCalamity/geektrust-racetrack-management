import VipSUV from '../../../src/models/vehicles/VipSUV';

describe('Testing VipSUV class', () => {
  let vipSuv: VipSUV;

  beforeAll(() => {
    vipSuv = new VipSUV();
  });

  test('vehicle type is "SUV"', () => {
    expect(vipSuv.getVehicleType()).toBe('SUV');
  });

  test('vehicle max slots in vip track is "1"', () => {
    expect(vipSuv.getMaxSlotsInTrack()).toBe(1);
  });

  test('vehicle fee per hour is "300"', () => {
    expect(vipSuv.getFeePerHour()).toBe(300);
  });
});
