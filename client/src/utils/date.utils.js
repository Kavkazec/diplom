/* eslint-disable import/prefer-default-export, no-mixed-operators */
export function getMonday(date) {
  const d = new Date(date.setHours(0, 0, 0, 0));
  const diff = d.getDate() - d.getDay() + (d.getDay() === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}
