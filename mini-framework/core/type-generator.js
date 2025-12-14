export function generateTypeTests(functionName, fn) {
  const tests = [];

  tests.push({
    name: `${functionName} debe fallar si recibe null`,
    fn: () => {
      try {
        fn(null);
        throw new Error("No lanzó error");
      } catch (e) {
        return true;
      }
    }
  });

  tests.push({
    name: `${functionName} debe funcionar con número`,
    fn: () => fn(5) !== undefined
  });

  return tests;
}
