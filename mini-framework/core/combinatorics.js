// --- Generador de combinaciones completas ---
export function fullCombinations(params) {
  const keys = Object.keys(params);
  const result = [];

  function helper(index, current) {
    if (index === keys.length) {
      result.push({ ...current });
      return;
    }

    const key = keys[index];
    for (const value of params[key]) {
      helper(index + 1, { ...current, [key]: value });
    }
  }

  helper(0, {});
  return result;
}

// --- Pairwise Testing básico ---
export function pairwise(params) {
  const keys = Object.keys(params);

  if (keys.length < 2) return fullCombinations(params);

  const result = [];
  const first = keys[0];

  for (const v1 of params[first]) {
    for (let i = 1; i < keys.length; i++) {
      const key = keys[i];
      for (const v2 of params[key]) {
        result.push({ [first]: v1, [key]: v2 });
      }
    }
  }

  return result;
}

// --- Asignar riesgo basado en impacto ---
export function assignRisk(testCase) {
  let risk = 0;

  for (const key of Object.keys(testCase)) {
    const value = testCase[key];

    if (typeof value === "string" && value.toLowerCase().includes("error")) {
      risk += 3;
    } else if (typeof value === "number" && value > 90) {
      risk += 2;
    } else {
      risk += 1;
    }
  }

  return risk;
}
