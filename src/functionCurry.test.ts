import { curry } from "./functionCurry";

describe("should return curriedAdd", () => {
  it("test curriedAdd with 5 parametrs", () => {
    const add = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e;

    const curriedAdd = curry(add);

    expect(curriedAdd(2, 3, 4)(5, 6)).toBe(20);
    expect(curriedAdd(1, 2, 3, 4, 5)).toBe(15);
    expect(curriedAdd(3, 4)(5, 6)(7)).toBe(25);
    expect(curriedAdd(4, 5)(6)(7, 8)).toBe(30);
    expect(curriedAdd(5)(6)(7)(8)(9)).toBe(35);
  });

  it("test curriedAdd with 6 parametrs", () => {
    const add = (
      a: number,
      b: number,
      c: number,
      d: number,
      e: number,
      f: number
    ) => a + b + c + d + e + f;

    const curriedAdd = curry(add);

    expect(curriedAdd(2, 3, 4)(5, 6, 7)).toBe(27);
    expect(curriedAdd(1, 2, 3, 4, 5, 6)).toBe(21);
    expect(curriedAdd(3, 4)(5, 6)(7, 8)).toBe(33);
    expect(curriedAdd(4, 5)(6, 7)(8, 9)).toBe(39);
    expect(curriedAdd(5)(6)(7)(8)(9)(10)).toBe(45);
  });
});
