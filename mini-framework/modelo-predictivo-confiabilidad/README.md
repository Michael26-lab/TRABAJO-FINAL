# Modelo Predictivo de Confiabilidad

Este proyecto implementa un modelo predictivo personalizado para estimar
la confiabilidad de módulos de software utilizando:

- Datos históricos de fallos
- Métricas de complejidad
- Patrones de uso

## Enfoque del modelo

El modelo combina:
- Un enfoque logarítmico para representar el impacto de la complejidad
- Un enfoque estocástico para simular variaciones reales del sistema

## Ejecución

1. Instalar dependencias:
   pip install -r requirements.txt

2. Ejecutar el predictor:
   python src/module_predictor.py

Los resultados se almacenan en:
results/predicciones.json
