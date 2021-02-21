export default function printDateFormatted(d) {
  return d.getFullYear() + '-' + (1 + d.getMonth()) + '-' + d.getDate();
}
