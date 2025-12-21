import fs from "fs";

const HISTORY_FILE = "./test-history.json";

// Cargar historial
function loadHistory() {
  if (!fs.existsSync(HISTORY_FILE)) return [];
  return JSON.parse(fs.readFileSync(HISTORY_FILE));
}

// Guardar historial
export function saveHistory(data) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2));
}

// Modelo predictivo tipo Naive Bayes simplificado
export function predictRisk(testCase) {
  const history = loadHistory();
  if (history.length === 0) return 0.5;

  let matches = 0;
  let fails = 0;

  history.forEach(h => {
    let similarity = 0;

    for (const k of Object.keys(testCase)) {
      if (testCase[k] === h.case[k]) similarity++;
    }

    if (similarity >= 2) {
      matches++;
      if (h.failed) fails++;
    }
  });

  if (matches === 0) return 0.3;

  return fails / matches;
}

// Ordenar casos por riesgo
export function prioritize(testCases) {
  return testCases
    .map(c => ({
      case: c,
      predicted: predictRisk(c)
    }))
    .sort((a, b) => b.predicted - a.predicted);
}

