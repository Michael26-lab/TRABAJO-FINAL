import csv
import json
import os
from reliability_model import reliability_score

BASE_DIR = os.path.dirname(__file__)

data_path = os.path.join(BASE_DIR, "..", "data", "historial_pruebas.csv")
results_path = os.path.join(BASE_DIR, "..", "results", "predicciones.json")

resultados = {}

with open(data_path) as file:
    reader = csv.DictReader(file)
    for row in reader:
        modulo = row["modulo"]
        score = reliability_score(
            int(row["fallos"]),
            int(row["complejidad"]),
            int(row["uso_diario"])
        )
        resultados[modulo] = score

os.makedirs(os.path.dirname(results_path), exist_ok=True)

with open(results_path, "w") as out:
    json.dump(resultados, out, indent=2)

print("Predicciones generadas correctamente")

