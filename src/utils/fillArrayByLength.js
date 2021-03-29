export default function fillArray(arr, length) {
  for (let i = 0; i < length; ++i) {
    if (arr[i] === undefined) {
      arr[i] = arr[i - 1 || 0]
    }
  }

  return arr
}
