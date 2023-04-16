export function shortDateFormatter(value: string | Date) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
export function numberFormatter(value: number | string) {
  return Intl.NumberFormat('en-GB', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
    compactDisplay: 'long',
  }).format(Number(value));
}
