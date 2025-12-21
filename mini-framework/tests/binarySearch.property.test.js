import { describe, it } from "../core/index.js";
import { binarySearch } from "../binary-search/binarySearch.js";

function generateSortedArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) arr.push(Math.floor(Math.random() * 100));
  return arr.sort((a, b) => a - b);
}

describe("Property-Based Testing de binarySearch", () => {
  
  it("Debe encontrar siempre un número existente en arreglos aleatorios", () => {
    for (let i = 0; i < 50; i++) {
      const arr = generateSortedArray(20);
      const randomIndex = Math.floor(Math.random() * arr.length);
      const value = arr[randomIndex];

      const idx = binarySearch(arr, value);

      if (idx !== randomIndex && arr[idx] !== value)
        throw new Error("binarySearch violó la propiedad");
    }
  });

});
"pruebas finales"
