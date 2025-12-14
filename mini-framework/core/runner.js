import fs from "fs";
import path from "path";
import url from "url";
import { getTests } from "./index.js";

let totalTests = 0;
let passed = 0;
let failed = 0;

const metrics = {
  cyclomatic: {},
  flaky: {},
  executionTime: {},
  coverage: { executedFiles: new Set(), totalFiles: 0 }
};

export async function run() {
  console.log("=== Ejecutando Mini-Framework con Métricas ===");

  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const testsDir = path.join(__dirname, "../tests");

  // Verificar existencia de tests
  if (!fs.existsSync(testsDir)) {
    console.log("❌ No existe carpeta /tests");
    return;
  }

  const testFiles = fs.readdirSync(testsDir).filter(f => f.endsWith(".js"));

  // Cobertura: contar archivos dentro de /src
  const srcDir = path.join(__dirname, "../src");
  if (fs.existsSync(srcDir)) {
    metrics.coverage.totalFiles = fs.readdirSync(srcDir).length;
  }

  // Importar cada archivo de test
  for (const file of testFiles) {
    metrics.coverage.executedFiles.add(file);
    await import(path.join(testsDir, file));
  }

  // Obtener tests registrados con describe/it
  const registry = getTests();

  for (const entry of registry) {
    if (entry.type !== "test") continue;

    totalTests++;
    const name = entry.name;
    const fn = entry.fn;

    const start = performance.now();

    try {
      await fn();
      passed++;

      metrics.executionTime[name] = performance.now() - start;

      const fnString = fn.toString();
      const ifCount = (fnString.match(/if\s*\(/g) || []).length;

      metrics.cyclomatic[name] = 1 + ifCount;

      // flaky test
      let flaky = false;
      for (let i = 0; i < 3; i++) {
        try {
          await fn();
        } catch {
          flaky = true;
        }
      }

      metrics.flaky[name] = flaky;

    } catch (err) {
      failed++;
      metrics.executionTime[name] = performance.now() - start;

      console.log(`❌ Error en prueba: ${name}`);
      console.log(err);
    }
  }

  const finalMetrics = {
    totalTests,
    passed,
    failed,
    cyclomatic: metrics.cyclomatic,
    flaky: metrics.flaky,
    executionTime: metrics.executionTime,
    coverage: {
      executed: metrics.coverage.executedFiles.size,
      total: metrics.coverage.totalFiles,
      percentage:
        metrics.coverage.totalFiles === 0
          ? "0%"
          : Math.round(
              (metrics.coverage.executedFiles.size /
                metrics.coverage.totalFiles) * 100
            ) + "%"
    }
  };

  console.log("=== MÉTRICAS GENERADAS ===");
  console.log(JSON.stringify(finalMetrics, null, 2));
}

run();
