export function sortByDate<T>(items: T & { data: { date: string } }[]) {
  return items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
}