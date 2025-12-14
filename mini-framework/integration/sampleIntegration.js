import { describe, it } from "../core/index.js";

describe("Integración Automática", () => {
  it("Validación combinada", () => {
    const a = x => x + 1;
    const b = y => y * 3;

    const result = b(a(2));
    if (result !== 9) throw new Error("Integración incorrecta");
  });
});
