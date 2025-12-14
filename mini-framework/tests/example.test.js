import { describe, it } from "../core/index.js";
import { createSpy } from "../core/spy.js";

describe("Pruebas básicas", () => {

  it("Prueba suma", () => {
    const sum = (a, b) => a + b;
    if (sum(2, 3) !== 5) throw new Error("Error en suma");
  });

  it("Espía personalizado", () => {
    const fake = createSpy((x) => x * 2);
    const result = fake(4);

    if (!fake.wasCalled()) throw new Error("El espía no fue llamado");
    if (fake.callCount() !== 1) throw new Error("Debe llamarse una vez");
    if (result !== 8) throw new Error("Resultado incorrecto");
  });
});
