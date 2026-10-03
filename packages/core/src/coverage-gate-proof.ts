// Disposable PR fixture: intentionally untested executable code.
// This branch must never be merged into main.
export function coverageGateProof(value: number): number {
  if (value > 0) return value + 1;
  return value - 1;
}
