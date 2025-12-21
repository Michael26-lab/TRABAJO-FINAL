import { describe, it } from "../core/index.js";
import { fullCombinations, pairwise, assignRisk } from "../core/combinatorics.js";
import { prioritize, saveHistory } from "../core/riskModel.js";

describe("Orquestación de pruebas combinatorias", () => {

  it("Genera combinaciones completas", () => {
    const params = {
      modo: ["normal", "error"],
      nivel: [10, 20]
    };

    const combos = fullCombinations(params);
    if (combos.length !== 4)
      throw new Error("fullCombinations no genera todas las combinaciones");
  });

  it("Genera combinaciones pairwise", () => {
    const params = {
      navegador: ["Chrome", "Firefox"],
      sistema: ["Win", "Linux"],
      red: ["wifi", "4g"]
    };

    const combos = pairwise(params);
    if (combos.length < 4)
      throw new Error("pairwise insuficiente");
  });

  it("Prioriza casos por riesgo histórico", () => {
    const casos = [
      { modo: "normal", nivel: 20 },
      { modo: "error", nivel: 100 }
    ];

    saveHistory([
      { case: casos[1], failed: true },
      { case: casos[0], failed: false }
    ]);

    const orden = prioritize(casos);

    if (orden[0].case.modo !== "error")
      throw new Error("No priorizó correctamente");
  });

});
