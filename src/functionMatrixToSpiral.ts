export function toSpiralFromMatrix(arr: number[][]): number[] {
  const result = [];
  let rowStartIdx = 0;
  let rowEndIdx = arr.length - 1;
  let colStartIdx = 0;
  let colEndIdx = arr[0].length - 1;

  while (rowStartIdx <= rowEndIdx && colStartIdx <= colEndIdx) {
    for (let i = colStartIdx; i <= colEndIdx; i++) {
      result.push(arr[rowStartIdx][i]);
    }
    rowStartIdx++;

    for (let i = rowStartIdx; i <= rowEndIdx; i++) {
      result.push(arr[i][colEndIdx]);
    }
    colEndIdx--;
    if (rowStartIdx <= rowEndIdx) {
      for (let i = colEndIdx; i >= colStartIdx; i--) {
        result.push(arr[rowEndIdx][i]);
      }
      rowEndIdx--;
    }

    if (colStartIdx <= colEndIdx) {
      for (let i = rowEndIdx; i >= rowStartIdx; i--) {
        result.push(arr[i][colStartIdx]);
      }
      colStartIdx++;
    }
  }
  return result;
}
