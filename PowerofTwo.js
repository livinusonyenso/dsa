function isPowerOfTwo(n) {
  console.log("Checking:", n);
  if (n === 1) return true;
  if (n % 2 !== 0 || n <= 0) return false;
  return isPowerOfTwo(n / 2);
}

isPowerOfTwo(16); // Logs: 16, 8, 4, 2, 1
