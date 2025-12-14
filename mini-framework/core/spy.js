export function createSpy(fn = () => {}) {
  const calls = [];

  function spy(...args) {
    calls.push(args);
    return fn(...args);
  }

  spy.calls = calls;
  spy.wasCalled = () => calls.length > 0;
  spy.callCount = () => calls.length;
  spy.calledWith = (...args) =>
    calls.some(call => JSON.stringify(call) === JSON.stringify(args));

  return spy;
}
