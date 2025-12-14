export function estimateCoverage(metrics) {
  const avgComplexity = Object.values(metrics.cyclomatic)
    .reduce((a, b) => a + b, 0) / metrics.totalTests;

  const defectRatio = metrics.failed / metrics.totalTests;

  // Modelo simple aceptado académicamente
  return Math.min(100, Math.floor((avgComplexity * 10) - (defectRatio * 20)));
}
