import { format, compareAsc } from 'date-fns'

export function formatDate(date) {
  const dateObj = new Date(date)

  return format(dateObj, 'dd. MM. yyyy HH:mm')
}

export function isAfter(dateLeft, dateRight) {
  return compareAsc(new Date(dateLeft), new Date(dateRight)) <= 0
}
