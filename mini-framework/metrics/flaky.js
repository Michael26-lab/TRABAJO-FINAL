export async function detectFlaky(testFn) {
  let results = [];

  for (let i = 0; i < 3; i++) {
    try {
      const r = testFn();
      if (r instanceof Promise) await r;
      results.push(true);
    } catch {
      results.push(false);
    }
  }

  const unique = [...new Set(results)];

  if (unique.length > 1) return "FLAKY";
  return "STABLE";
}
