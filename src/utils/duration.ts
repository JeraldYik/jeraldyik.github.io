export function calculateDuration(fromDate: string, toDate: string) {
  const from = parseDate(fromDate);
  const to = toDate === 'Present' ? new Date() : parseDate(toDate);

  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let duration = '';
  if (years > 0) {
    duration += `${years} year${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    if (duration) duration += ' ';
    duration += `${months} month${months > 1 ? 's' : ''}`;
  }

  return duration || '0 months';
}

function parseDate(dateString: string) {
  const [monthName, yearStr] = dateString.split(' ');
  const year = parseInt(yearStr);
  const month = new Date(`${monthName} 1, ${year}`).getMonth();
  return new Date(year, month);
}
