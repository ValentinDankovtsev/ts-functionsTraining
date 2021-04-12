class Parallel {
  constructor(stream) {
    this.stream = stream;
  }

  async jobs(arr) {
    this.result = [];
    for (let i = 0; i < arr.length; i++) {
      const data = await Promise.all(arr[i].map((e) => e()));
      this.result = this.result.concat(data);
    }
    return this.result;
  }
}
(async function main() {
  const runner = new Parallel();
  console.log(
    await runner.jobs([
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
    ])
  );
})();
