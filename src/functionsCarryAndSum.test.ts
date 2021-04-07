import { curriedAdd, sum } from "./functionsCarryAndSum";

describe("should return curriedAdd", () => {
  it("test curriedAdd", () => {
    expect(curriedAdd(1, 2, 3, 4, 5)).toBe(15);
    expect(curriedAdd(2, 3, 4)(5, 6)).toBe(20);
    expect(curriedAdd(3, 4)(5, 6)(7)).toBe(25);
    expect(curriedAdd(4, 5)(6)(7, 8)).toBe(30);
    expect(curriedAdd(5)(6)(7)(8)(9)).toBe(35);
  });
});

describe("should return sum alert", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });
  it("should return 1", () => {
    alert(sum(1).toString());
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(1);
  });
  it("should return 8", () => {
    const s3 = sum(3);
    alert(s3(5).toString());
    expect(window.alert).toHaveBeenCalledWith(8);
  });
  //     const mockAlert = jest
  //   .spyOn(window, "alert")
  //   .mockImplementation(() =>3);
  //   const sum3 = sum(3);
  //   const result = alert(sum3(1)(2))
  //     expect(result).toBe(3)
  //     expect(mockAlert).toHaveBeenCalled()
});
