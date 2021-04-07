class Parallel {
  constructor(stream) {
    this.stream = stream;
  }

  async jobs(...funcs) {
    this.tasks = funcs.map((e) => e());
    const arr = [];
    for (let i = 0; i < this.tasks.length; i++) {
      arr.push(this.tasks[i]);
    }
    const result = await Promise.all(arr);
    return result;
  }
}
(async function main() {
  const runner = new Parallel();
  console.log(
    await runner.jobs(
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 5))
    )
  ); // [1, 2, 3, 4, 5];
})();
