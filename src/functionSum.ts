/* eslint-disable @typescript-eslint/no-explicit-any */

export function sum(): 0;
export function sum(s: number): number;
export function sum(a?: number): any {
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
