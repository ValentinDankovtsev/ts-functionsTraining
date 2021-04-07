/* eslint-disable @typescript-eslint/no-explicit-any */
// Task 1

const curry = function curry(fn: any) {
  const arity = fn.length;
  console.log("arity", arity);

  return function f1(...args: []) {
    console.log("f1 args", args);
    if (args.length >= arity) {
      console.log("enough arguments");
      return fn(...args);
    }
    console.log("need more arguments");
    return function f2(...moreArgs: []) {
      console.log("f2", moreArgs);
      const newArgs = args.concat(moreArgs) as [];
      return f1(...newArgs);
    };
  };
};

const add = (a: number, b: number, c: number, d: number, e: number): number =>
  a + b + c + d + e;

export const curriedAdd: any = curry(add);
const result = curriedAdd(1)(6)(7)(8)(9);
console.log("result", result);

// Task 2

export function sum(a: number): any {
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
