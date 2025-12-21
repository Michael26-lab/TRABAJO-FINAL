export function sumarNumeros(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Parámetros inválidos");
  }
  return a + b;
}

window.sumar = function () {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);

  const resultado = sumarNumeros(a, b);
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
};
