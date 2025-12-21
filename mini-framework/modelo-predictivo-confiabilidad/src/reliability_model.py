import math
import random

def reliability_score(fallos, complejidad, uso):
    # Modelo logarítmico
    impacto_complejidad = math.log(complejidad + 1)

    # Modelo estocástico (ruido controlado)
    variacion = random.uniform(0.9, 1.1)

    score = max(0, 1 - (fallos * impacto_complejidad) / uso)
    return round(score * variacion, 3)
