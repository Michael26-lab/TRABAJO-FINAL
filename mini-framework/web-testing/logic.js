export default function sumarNumeros(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Parámetros inválidos");
  }
  return a + b;
}
