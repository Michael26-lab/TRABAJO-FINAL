import sumarNumeros from "./logic.js";

if (typeof window !== "undefined") {
  window.sumar = function () {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    try {
      const resultado = sumarNumeros(a, b);
      document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
    } catch (error) {
      document.getElementById("resultado").innerText = error.message;
    }
  };
}

