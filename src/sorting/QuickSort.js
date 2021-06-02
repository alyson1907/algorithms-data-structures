async function sleep(ms) {
  await new Promise(res => setTimeout(res, ms))
}

async function swap(array, i, j) {
  await sleep(10)
  const aux = array[i]
  array[i] = array[j]
  array[j] = aux
}

async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    state[i] = "PROCESSING"
  }
  const pivotValue = arr[end]
  let pivotIndex = start
  for (let i = start; i < end; i++) {
    state[pivotIndex] = "PIVOT"
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex)
      state[pivotIndex] = "FINISHED"
      pivotIndex++
    }
  }
  await swap(arr, pivotIndex, end)

  for (let i = start; i < end; i++) {
    state[i] = "FINISHED"
  }
  return pivotIndex
}

async function quickSort(arr, start, end) {
  if (start >= end) return
  let pivotIdx = await partition(arr, start, end)
  // state[pivotIdx] = "FINISHED"
  await Promise.all([quickSort(arr, start, pivotIdx - 1), quickSort(arr, pivotIdx + 1, end)])
}
