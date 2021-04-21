/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */

//  export function curry<A, B, C, D, E, F>(
//   cb: (a?: A, b?: B, c?: C, d?: D, e?: E, f?: F) => F
// ): (a: A, b: B, c: C) => (d: D, e: E) => F;

// export function curry<A, B, C, D, E, F>(
// cb: (a?: A, b?: B, c?: C, d?: D, e?: E, f?: F) => F
// ): (a: A, b: B, c: C, d: D, e: E) => F;

//  export function curry<A, B, C, D, E, F>(
//  cb: (a?: number, b?: number, c?: number, d?: number, e?: number, f?: number) => F
//  ): (a: A, b: B) => (c: C, d: D) => (e: E) => F;

// export function curry<A, B, C, D, E, F, J>(
// cb: (a?: number, b?: number, c?: number, d?: number, e?: number, f?: number) => J
// ): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F)=>J;

// export function curry<A, B, C, D, E, F>(
// cb: (a?: A, b?: B, c?: C, d?: D, e?: E, f?: F) => F
//  ): (a: A, b: B) => (c: C) => (d: D, e: E) => F;

// eslint-disable-next-line @typescript-eslint/ban-types
//  export function curry<T extends number>(cb:(a:T, b:T,c:T,d:T)=>T):(a:T,b:T,c:T)=>(d:T,e:T)=>T
//  export function curry<T extends number>(cb:(a:T, b:T,c:T,d:T,e:T)=>T):(a:T,b:T,c:T)=>(d:T,e:T)=>T
//  export function curry<T extends number>(cb:(a:T, b:T,c:T,d:T,e:T)=>T):(a:T,b:T,c:T,d:T,e:T)=>T
//  export function curry<T extends number>(cb:(a:T, b:T,c:T,d:T,e:T)=>T):(a:T,b:T)=>(c:T,d:T)=>(e:T)=>T
//  export function curry<T extends number>(cb:(a:T, b:T,c:T,d:T,e:T)=>T):(a:T,b:T)=>(c:T)=>(d:T,e:T)=>T
//  export function curry<T extends number>(cb:(a:T, b:T,c:T,d:T,e:T)=>T):(a:T)=>(b?:T)=>(c:T)=>(d?:T)=>(e?:T)=>T

// interface aggregateFn<T> {
//   (...args: number[]): T;
// }

// interface curryFn<T> extends aggregateFn<T> {
//   (...args: number[]): curryFn<T>;
// }
// export function curry<T>(f: aggregateFn<T>): curryFn<T> {
//   return (...args: any[]): curryFn<any> | any => {
//       if (args.length)
//           return curry(f.bind.apply(f,[undefined].concat(args)));
//       return f();
//   }
// }
// const add = (a:number, b: number, c: number, d: number, e: number) =>
// a + b + c + d + e;
// const curriedAdd = curry(add)
// console.log(curriedAdd(1,2,3,4))
// export function curry<T>(fn: aggregateFn<T>):curryFn<T> {
// const arity = fn.length;

// return function carred(...args) {
// if (args.length >= arity) {
//   return fn(...args);
//  }
//    return function f2(...moreArgs) {
//     return carred(...args.concat(moreArgs));
//   };
//  };
//  }

export type Arity1<A, B> = (a: A) => B;

/* A function which takes exactly 2 parameters */
export type Arity2<A, B, C> = (a: A, b: B) => C;

/* A function which takes exactly 3 parameters */
export type Arity3<A, B, C, D> = (a: A, b: B, c: C) => D;
/* A function which takes exactly 4 parameters */
export type Arity4<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E;
/* A function which takes exactly 5 parameters */
export type Arity5<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F;

/* A curried function of 0 to 1 parameters accepted */
export interface Curry1<A, B> {
  (): Curry1<A, B>;
  (a: A): B;
}

/* A curried function of 0 to 2 parameters accepted */
export interface Curry2<A, B, C> {
  (): Curry2<A, B, C>;
  (a: A): Curry1<B, C>;
  (a: A, b: B): C;
}

/* A curried function of 0 to 3 parameters accepted */
export interface Curry3<A, B, C, D> {
  (): Curry3<A, B, C, D>;
  (a: A): Curry2<B, C, D>;
  (a: A, b: B): Curry1<C, D>;
  (a: A, b: B, c: C): D;
}
/* A curried function of 0 to 4 parameters accepted */
export interface Curry4<A, B, C, D, E> {
  (): Curry4<A, B, C, D, E>;
  (a: A): Curry3<A, B, C, D>;
  (a: A, b: B): Curry2<B, C, D>;
  (a: A, b: B, c: C): Curry1<C, D>;
  (a: A, b: B, c: C, d: D): E;
}
/* A curried function of 0 to 5 parameters accepted */
export interface Curry5<A, B, C, D, E, F> {
  (): Curry5<A, B, C, D, E, F>;
  (a: A): Curry4<A, B, C, D, E>;
  (a: A, b: B): Curry3<A, B, C, D>;
  (a: A, b: B, c: C): Curry2<B, C, D>;
  (a: A, b: B, c: C, d: D): Curry1<C, D>;
  (a: A, b: B, c: C, d: D, e: E): F;
}

function curry1<A, B>(fn: Arity1<A, B>): Curry1<A, B>;
function curry1(fn: Arity1<any, any>): Curry1<any, any>;
function curry1<A, B>(fn: Arity1<A, B>): Curry1<A, B> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function curried(a: A) {
    switch (arguments.length) {
      case 0:
        return curried;
      default:
        return fn(a);
    }
  }
  return curried as Curry1<A, B>;
}

function curry2<A, B, C>(fern: Arity2<A, B, C>): Curry2<A, B, C>;
function curry2(fn: Arity2<any, any, any>): Curry2<any, any, any>;
function curry2<A, B, C>(fn: Arity2<A, B, C>): Curry2<A, B, C> {
  function curried(a: A, b: B): any {
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return curry1<B, C>((b: B) => fn(a, b));
      default:
        return fn(a, b);
    }
  }
  return curried as Curry2<A, B, C>;
}

function curry3<A, B, C, D>(fn: Arity3<A, B, C, D>): Curry3<A, B, C, D>;
function curry3(fn: Arity3<any, any, any, any>): Curry3<any, any, any, any>;
function curry3<A, B, C, D>(fn: Arity3<A, B, C, D>): Curry3<A, B, C, D> {
  function curried(a: A, b: B, c: C): any {
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return curry2<B, C, D>((b: B, c: C) => fn(a, b, c));
      case 2:
        return curry1<C, D>((c: C) => fn(a, b, c));
      default:
        return fn(a, b, c);
    }
  }
  return curried as Curry3<A, B, C, D>;
}

function curry4<A, B, C, D, E>(
  fn: Arity4<A, B, C, D, E>
): Curry4<A, B, C, D, E>;
function curry4(
  fn: Arity4<any, any, any, any, any>
): Curry4<any, any, any, any, any>;
function curry4<A, B, C, D, E>(
  fn: Arity4<A, B, C, D, E>
): Curry4<A, B, C, D, E> {
  function curried(a: A, b: B, c: C, d: D): any {
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return curry3<B, C, D, E>((b: B, c: C, d: D) => fn(a, b, c, d));
      case 2:
        return curry2<C, D, E>((c: C, d: D) => fn(a, b, c, d));
      case 3:
        return curry1<D, E>((d: D) => fn(a, b, c, d));
      default:
        return fn(a, b, c, d);
    }
  }
  return curried as Curry4<A, B, C, D, E>;
}

function curry5<A, B, C, D, E, F>(
  fn: Arity5<A, B, C, D, E, F>
): Curry5<A, B, C, D, E, F>;
function curry5(
  fn: Arity5<any, any, any, any, any, any>
): Curry5<any, any, any, any, any, any>;
function curry5<A, B, C, D, E, F>(
  fn: Arity5<A, B, C, D, E, F>
): Curry5<A, B, C, D, E, F> {
  function curried(a: A, b: B, c: C, d: D, e: E): any {
    switch (arguments.length) {
      case 0:
        return curried;
      case 1:
        return curry4<B, C, D, E, F>((b: B, c: C, d: D, e: E) =>
          fn(a, b, c, d, e)
        );
      case 2:
        return curry3<C, D, E, F>((c: C, d: D, e: E) => fn(a, b, c, d, e));
      case 3:
        return curry2<D, E, F>((d: D, e: E) => fn(a, b, c, d, e));
      case 4:
        return curry1<E, F>((e: E) => fn(a, b, c, d, e));
      default:
        return fn(a, b, c, d, e);
    }
  }
  return curried as Curry5<A, B, C, D, E, F>;
}
export function curry<A, B>(fn: Arity1<A, B>): Curry1<A, B>;
export function curry(fn: Arity1<any, any>): Curry1<any, any>;

export function curry<A, B, C>(fn: Arity2<A, B, C>): Curry2<A, B, C>;
export function curry(fn: Arity2<any, any, any>): Curry2<any, any, any>;

export function curry<A, B, C, D>(fn: Arity3<A, B, C, D>): Curry3<A, B, C, D>;
export function curry(
  fn: Arity3<any, any, any, any>
): Curry3<any, any, any, any>;

export function curry<A, B, C, D, E>(
  fn: Arity4<A, B, C, D, E>
): Curry4<A, B, C, D, E>;
export function curry(
  fn: Arity4<any, any, any, any, any>
): Curry4<any, any, any, any, any>;

export function curry<A, B, C, D, E, F>(
  fn: Arity5<A, B, C, D, E, F>
): Curry5<A, B, C, D, E, F>;
export function curry(
  fn: Arity5<any, any, any, any, any, any>
): Curry5<any, any, any, any, any, any>;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/ban-types
export function curry(fn: Function) {
  switch (fn.length) {
    case 0:
      return fn;
    case 1:
      return curry1(fn as Arity1<any, any>);
    case 2:
      return curry2(fn as Arity2<any, any, any>);
    case 3:
      return curry3(fn as Arity3<any, any, any, any>);
    case 4:
      return curry4(fn as Arity4<any, any, any, any, any>);
    case 5:
      return curry5(fn as Arity5<any, any, any, any, any, any>);
    default:
      throw new Error(
        "This `curry` implementation does not support more than 5 arguments"
      );
  }
}
