export function generateCombinations() {
  const a = [0, 1, 5];
  const b = [0, 2, 10];
  const combinations = [];

  for (let x of a) {
    for (let y of b) {
      combinations.push({ a: x, b: y });
    }
  }
  return combinations;
}
