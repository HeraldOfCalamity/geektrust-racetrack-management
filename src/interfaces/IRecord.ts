export default interface IRecord {
  getVehicleType(): string;

  getVehicleNum(): string;

  getRecordChargeableHours(): number;

  getRecordSubTotal(): number;

  getRecordType(): string;
}
