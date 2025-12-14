export function calculateCyclomatic(functionSource) {
  const keywords = ["if", "for", "while", "catch", "&&", "||", "?"];
  let complexity = 1;

  keywords.forEach(k => {
    const matches = functionSource.split(k).length - 1;
    complexity += matches;
  });

  return complexity;
}
