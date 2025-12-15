import fs from "fs";
import path from "path";
import url from "url";

export function staticAnalysis() {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const srcDir = path.join(__dirname, "../src");
  const files = fs.readdirSync(srcDir);

  let warnings = [];

  for (const f of files) {
    const content = fs.readFileSync(path.join(srcDir, f), "utf8");

    if (content.includes("var ")) {
      warnings.push({
        file: f,
        issue: "Uso de var detectado mala practica "
      });
    }

    if (content.length < 20) {
      warnings.push({
        file: f,
        issue: "Archivo pequeño para analisis de calidad"
      });
    }
  }

  return warnings;
}


export function noCodeAutomation() {
  return [
    { step: "Abrir aplicacion", status: "OK" },
    { step: "Ingresar datos automaticamente", status: "OK" },
    { step: "Verificar UI simulada", status: "OK" },
  ];
}


export function reliabilityPrediction(testResults) {
  const failures = testResults.failed;
  const total = testResults.totalTests;

  const failureRate = failures / (total || 1);
  const reliability = 1 - failureRate;

  return {
    failureRate,
    reliability,
    recommendation:
      reliability > 0.95
        ? "Sistema muy confiable."
        : reliability > 0.8
        ? "Confiabilidad moderada, revisar modulos criticos."
        : "Baja confiabilidad, requiere refactor completo."
  };
}
