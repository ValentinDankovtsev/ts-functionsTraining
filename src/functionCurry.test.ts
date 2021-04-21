import { curry } from "./functionCurry";

describe("should return curriedAdd", () => {
  it("test curriedAdd", () => {
    const add = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e;

    const curriedAdd = curry(add);

    expect(curriedAdd(2, 3, 4)(5, 6)).toBe(20);
    expect(curriedAdd(1, 2, 3, 4, 5)).toBe(15);
    expect(curriedAdd(3, 4)(5, 6)(7)).toBe(25);
    expect(curriedAdd(4, 5)(6)(7, 8)).toBe(30);
    expect(curriedAdd(5)(6)(7)(8)(9)).toBe(35);
  });
});
