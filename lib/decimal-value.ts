import { DecimalValueType } from "@/types/decimal-value-type";

export function parseDecimalValue(decimal: DecimalValueType): number {
  return decimal.units + decimal.nanos / 1_000_000_000;
}

export function toDecimalValue(value: number): DecimalValueType {
  const units = Math.trunc(value); // Bagian bilangan bulat
  const nanos = Math.round((value - units) * 1_000_000_000); // Bagian desimal dalam nano
  return { units, nanos };
}
