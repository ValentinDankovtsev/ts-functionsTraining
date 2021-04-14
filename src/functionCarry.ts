const add = (a: number, b: number, c: number, d: number, e: number) =>
  a + b + c + d + e;

function curry<A, B, C, D, E, F, J>(
  cb: (a: A, b: B, c: C, d: D, e: E, f: F) => J
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => J;

function curry(fn: (...args: number[]) => number) {
  const arity = fn.length;

  return function carred(...args: number[]) {
    if (args.length >= arity) {
      return fn(...args);
    }
    return function f2(...moreArgs: number[]) {
      return carred(...args.concat(moreArgs));
    };
  };
}

export const curriedAdd = curry(add);
