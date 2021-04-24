import { semverSort, cmpVersions } from "./functionSemverSort";

describe("semverSort test", () => {
  const array = [
    "1.0.5",
    "2.5.0",
    "0.12.0",
    "1",
    "1.23.45",
    "1.4.50",
    "1.2.3.4.5.6.7",
  ];
  it("semverSort return result", () => {
    const result = semverSort(array);
    expect(result).toEqual([
      "0.12.0",
      "1",
      "1.0.5",
      "1.2.3.4.5.6.7",
      "1.4.50",
      "1.23.45",
      "2.5.0",
    ]);
  });
});

describe("cmpVersions test", () => {
  const array = ["1.0.5", "2.5.0", "0.12.0"];
  it("cmpVersions have been used difference", () => {
    expect(cmpVersions(array[1], array[0])).toBe(1);
    expect(cmpVersions(array[2], array[1])).toBe(-2);
    expect(cmpVersions(array[2], array[0])).toBe(-1);
  });
});
