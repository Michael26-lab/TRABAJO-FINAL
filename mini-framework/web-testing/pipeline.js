import { generateCombinations } from "./combinatorial/acts-sim.js";
import { runNoCodeTests } from "./automation/testcraft-sim.js";
import { reliabilityModel } from "./reliability/smerfs-sim.js";

function staticAnalysis() {
  return {
    tool: "SonarQube (simulado)",
    codeSmells: 2,
    bugs: 0,
    vulnerabilities: 0,
    maintainability: "A"
  };
}

function runPipeline() {
  const staticResult = staticAnalysis();
  const combinations = generateCombinations();
  const automation = runNoCodeTests();
  const reliability = reliabilityModel(1, 3);

  console.log("=== PIPELINE DE TESTING INTEGRAL ===");
  console.log("Análisis estático:", staticResult);
  console.log("Pruebas combinatorias:", combinations);
  console.log("Automatización:", automation);
  console.log("Confiabilidad:", reliability);
}

runPipeline();
