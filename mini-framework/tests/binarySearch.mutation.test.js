import { describe, it } from "../core/index.js";
import { binarySearch } from "../binary-search/binarySearch.js";

describe("Mutation Testing — binarySearch", () => {

  it("Debe fallar si cambiamos la condición de igualdad", () => {
    const mutant = (arr, target) => {
      let left = 0;
      let right = arr.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // ❌ Mutación: cambio === por !==
        if (arr[mid] !== target) return mid;

        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
      }

      return -1;
    };

    const arr = [1, 2, 3];
    const result = mutant(arr, 2);

    if (result !== 1) throw new Error("Mutación NO detectada — pruebas débiles");
  });

});
