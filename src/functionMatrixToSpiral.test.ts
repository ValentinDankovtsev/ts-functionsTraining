import { toSpiralFromMatrix } from "./functionMatrixToSpiral";

describe("should return matrixSpiral", () => {
  it("test toSpiralFromMatrix", () => {
    const matrix = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
    ];

    const result = [
      0,
      1,
      2,
      3,
      4,
      9,
      14,
      19,
      18,
      17,
      16,
      15,
      10,
      5,
      6,
      7,
      8,
      13,
      12,
      11,
    ];
    expect(toSpiralFromMatrix(matrix)).toEqual(result);
  });

  it("test toSpiralFromMatrix2", () => {
    const matrix = [[1], [2], [3], [4]];
    const result = [1, 2, 3, 4];
    expect(toSpiralFromMatrix(matrix)).toEqual(result);
  });
});
