/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

// function sum<A, B>(a:A|b:B,C)=>(a:A,b:B)


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export function sum(a:number):any
export function sum(w:undefined):0
export function sum(s:number):number
export function sum(a: any):any {
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
