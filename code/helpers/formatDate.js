import { format } from 'date-fns'

export function formatDate(date) {
  const dateObj = new Date(date)

  return format(dateObj, 'dd. MM. yyyy HH:mm')
}
