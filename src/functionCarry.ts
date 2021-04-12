const curry = function curry(fn: (...args: number[]) => number) {
  const arity = fn.length;

  return function carred(...args: number[]) {
    if (args.length >= arity) {
      return fn(...args);
    }
    return function f2(...moreArgs: number[]) {
      return carred(...args.concat(moreArgs));
    };
  };
};

const add = (a: number, b: number, c: number, d: number, e: number): number =>
  a + b + c + d + e;

export const curriedAdd = curry(add);
