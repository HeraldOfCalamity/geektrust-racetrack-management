import { IComparable, Comparator } from '../interfaces/IComparable';
import IOperable from '../interfaces/IOperable';

export default class Time implements IComparable<Time>, IOperable<Time> {
  private _hours: number;
  private _minutes: number;

  public constructor();
  public constructor(time: string);
  public constructor(time: number);
  public constructor(time?: unknown) {
    throw new Error('Constructor not implemented.');
  }

  public add(item: Time): Time {
    throw new Error('Method not implemented.');
  }

  public substract(item: Time): Time {
    throw new Error('Method not implemented.');
  }

  public isBetween(lowerBound: Time, upperBound: Time): boolean {
    throw new Error('Method not implemented.');
  }

  public equals(item: Time): boolean {
    throw new Error('Method not implemented.');
  }

  public compareTo(item: Time): Comparator {
    throw new Error('Method not implemented.');
  }

  public get hours(): number {
    throw new Error('Method not implemented.');
  }

  public get minutes(): number {
    throw new Error('Method not implemented.');
  }

  public set hours(hours: number | string) {
    throw new Error('Method not implemented.');
  }

  public set minutes(hours: number | string) {
    throw new Error('Method not implemented.');
  }
}
