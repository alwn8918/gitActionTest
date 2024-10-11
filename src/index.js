// computes a factorial of a given positive integer
// version: 1 -> 2 -> 3
function factorial(n) {
  if (n < 0) {
    throw new Error("n must be a positive integer");
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1); // 재귀적 호출
}

module.exports = factorial;
