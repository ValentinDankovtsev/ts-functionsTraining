

export function curry<A, B, C, D, E, F>(
    cb: (a: A, b: B, c: C, d: D, e: E, f: F) => F
  ): (a: A, b: B, c: C) => (d: D, e: E) => F;

export function curry<A, B, C, D, E, F>(
  cb: (a: A, b: B, c: C, d: D, e: E, f: F) => F
): (a: A, b: B, c: C, d: D, e: E) => F;

export function curry<A, B, C, D, E, F>(
  cb: (a: number, b: number, c: number, d: number, e: number, f: number) => F
): (a: A, b: B) => (c: C, d: D) => (e: E) => F;

export function curry<A, B, C, D, E, F, J>(
  cb: (a: number, b: number, c: number, d: number, e: number, f: number) => J
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F)=>J;

export function curry<A, B, C, D, E, F>(
  cb: (a: A, b: B, c: C, d: D, e: E, f: F) => F
): (a: A, b: B) => (c: C) => (d: D, e: E) => F;

// eslint-disable-next-line @typescript-eslint/ban-types
export function curry(fn: Function):Function{
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

