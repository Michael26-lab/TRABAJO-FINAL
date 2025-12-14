let tests = [];

export function describe(title, callback) {
  callback(); // ejecutar para registrar los "it"
}

export function it(name, fn) {
  tests.push({ name, fn, type: "test" });
}

export function getTests() {
  return tests;
}
