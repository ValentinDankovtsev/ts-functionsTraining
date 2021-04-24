export function cmpVersions(a: string, b: string): number {
  const regExStrip0 = /[^0-9.]/g;
  const segmentsA = a.replace(regExStrip0, "").split(".");
  const segmentsB = b.replace(regExStrip0, "").split(".");
  const l = Math.min(segmentsA.length, segmentsB.length);
  for (let i = 0; i < l; i++) {
    const diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
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
