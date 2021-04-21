import { sum } from "./functionSum";

describe("should return sum alert", () => {
  beforeEach(() => {
    window.alert = jest.fn((e) => e.toString());
  });
  it("should return 1", () => {
    alert(sum(1));
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveReturnedWith(1);
  });
  it("should return 8", () => {
    const s3 = sum(3);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    alert((s3 as any)(5));
    expect(window.alert).toHaveReturnedWith(8);
  });
  it("should return 0", () => {
    alert(sum());
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveReturnedWith("0");
  });
});
