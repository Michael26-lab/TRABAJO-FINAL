import { describe, it } from "../core/index.js";
import { generateTypeTests } from "../core/type-generator.js";

function double(n) {
  if (typeof n !== "number") throw new Error("Debe ser número");
  return n * 2;
}

describe("Pruebas automáticas por tipos", () => {
  const auto = generateTypeTests("double", double);

  auto.forEach(test =>
    it(test.name, test.fn)
  );
});
