import { describe, it } from "../core/index.js";
import { binarySearch } from "../binary-search/binarySearch.js";

describe("Contract Testing — binarySearch", () => {

  it("Debe lanzar error si el primer parámetro no es un arreglo", () => {
    try {
      binarySearch("no array", 5);
      throw new Error("No lanzó error");
    } catch (e) {
      // OK
    }
  });

  it("Debe lanzar error si el arreglo contiene valores no numéricos", () => {
    try {
      binarySearch([1, 2, "a"], 2);
      throw new Error("No lanzó error");
    } catch (e) {
      // OK
    }
  });

  it("Debe retornar -1 si el elemento no existe", () => {
    const result = binarySearch([1, 2, 3], 99);
    if (result !== -1) throw new Error("Contrato violado");
  });

  it("Debe retornar la posición correcta para un elemento existente", () => {
    const arr = [2, 4, 6, 8];
    const idx = binarySearch(arr, 6);
    if (idx !== 2) throw new Error("Índice incorrecto");
  });

});
