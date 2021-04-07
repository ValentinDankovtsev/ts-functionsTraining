export function cmpVersions(a: string, b: string): number {
  const regExStrip0 = /[^0-9.]/g;
  /*   все кроме цифр и точек заменяем  */
  console.log(regExStrip0);
  const segmentsA = a.replace(regExStrip0, "").split(".");
  console.log("segmentsA", segmentsA);
  const segmentsB = b.replace(regExStrip0, "").split(".");
  console.log("segmentsB", segmentsB);
  const l = Math.min(segmentsA.length, segmentsB.length);
  console.log("l", l);
  for (let i = 0; i < l; i++) {
    const diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
    console.log("diff", diff);
    if (diff) {
      return diff;
    }
  }
  const A = segmentsA.length - segmentsB.length;
  return A;
}

export function semverSort(arr: string[]): string[] {
  return arr.sort(cmpVersions);
}

const array = [
  "1.0.5",
  "2.5.0",
  "0.12.0",
  "1",
  "1.23.45",
  "1.4.50",
  "1.2.3.4.5.6.7",
];
console.log(semverSort(array));
