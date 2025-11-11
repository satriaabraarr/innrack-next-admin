import { parseISO } from "date-fns";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { formatInTimeZone } from "date-fns-tz";

/**
 * Konversi Date lokal ke Protobuf Timestamp tanpa mengubah zona waktu.
 * Asumsinya: Date sudah merepresentasikan waktu lokal yang dipilih user.
 */
export function dateToProtobufTimestamp(date: Date): Timestamp {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid Date object");
  }

  const ts = new Timestamp();
  const milliseconds = date.getTime(); // epoch lokal
  ts.setSeconds(Math.floor(milliseconds / 1000));
  ts.setNanos((milliseconds % 1000) * 1e6);
  return ts;
}

export function isoToProtobufTimestamp(iso: string): Timestamp {
  const date = parseISO(iso); // parse ISO ke Date
  if (isNaN(date.getTime())) throw new Error("Invalid ISO string");

  const ts = new Timestamp();
  ts.setSeconds(Math.floor(date.getTime() / 1000));
  ts.setNanos((date.getTime() % 1000) * 1e6);
  return ts;
}

export function protobufTimestampToDateString(
  rawDate: { seconds: number; nanos: number },
  dateFormat: string = "dd MMMM yyyy",
  timeZone: string = "Asia/Jakarta"
): string {
  const ts = new Timestamp();
  ts.setSeconds(rawDate.seconds);
  ts.setNanos(rawDate.nanos);
  const millis = ts.getSeconds() * 1000 + ts.getNanos() / 1e6;
  const date = new Date(millis);
  return formatInTimeZone(date, timeZone, dateFormat);
}

//untuk agar biar tidak error type saat panggil protobufTimestampToDateString
export function toTimestampInstance(obj: {
  seconds: number;
  nanos: number;
}): Timestamp {
  const ts = new Timestamp();
  ts.setSeconds(obj.seconds);
  ts.setNanos(obj.nanos);
  return ts;
}

export function sanitizeTimestamp(obj: unknown): {
  seconds: number;
  nanos: number;
} {
  if (
    typeof obj === "object" &&
    obj !== null &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (obj as any).seconds === "number" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (obj as any).nanos === "number"
  ) {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      seconds: (obj as any).seconds,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      nanos: (obj as any).nanos,
    };
  }
  throw new Error("Invalid timestamp object");
}
