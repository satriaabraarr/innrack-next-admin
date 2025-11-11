export default function convertToWhatsAppId(phone: string): string {
  // Hilangkan semua karakter non-digit
  const digitsOnly = phone.replace(/\D/g, "");

  // Ganti awalan 0 dengan 62
  const normalized = digitsOnly.startsWith("0")
    ? "62" + digitsOnly.slice(1)
    : digitsOnly;

  return `${normalized}@c.us`;
}
