export function measureTime(fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
}
