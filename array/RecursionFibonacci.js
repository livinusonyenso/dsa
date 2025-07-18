function fibonacci(n) {
  console.log("Calculating F(" + n + ")");
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 5:", fibonacci(5));
