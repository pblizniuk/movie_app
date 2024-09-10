export default function getRandomSlice(arr: string[], sliceSize: number) {
  if (sliceSize > arr.length) {
    return arr.slice() // Return a copy of the entire array
  }

  const startIndex = Math.floor(Math.random() * (arr.length - sliceSize + 1))
  return arr.slice(startIndex, startIndex + sliceSize)
}
