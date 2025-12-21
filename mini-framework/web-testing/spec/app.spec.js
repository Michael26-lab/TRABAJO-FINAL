import sumarNumeros from "../logic.js";

describe("Prueba de suma", () => {
  it("suma correctamente dos números", () => {
    expect(sumarNumeros(2, 3)).toBe(5);
  });
});
