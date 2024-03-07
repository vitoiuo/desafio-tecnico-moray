export default function groupBy<T extends object, K extends keyof T>(list: T[], key: K): Record<string, T[]> {
  const obj: Record<string, T[]> = {}
  list.forEach((item) => {
    const collection = obj[item[key] as string]
    if (!collection) {
      obj[item[key] as string] = [item]
    } else {
      collection.push(item)
    }
  })
  return obj
}