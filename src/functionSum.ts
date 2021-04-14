export function sum(a: number | undefined): number {
  if (a === undefined) return 0;
  let currentSum = a;

  function f(b: number) {
    currentSum += b;
    return f;
  }
  f.toString = function toPrimitive() {
    return currentSum;
  };
  return f;
}
