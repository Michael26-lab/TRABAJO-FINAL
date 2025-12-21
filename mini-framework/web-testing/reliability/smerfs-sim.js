export function reliabilityModel(failures, totalTests) {
  const reliability = 1 - failures / totalTests;
  return {
    model: "SMERFS (simulado)",
    reliabilityScore: reliability.toFixed(2)
  };
}
