function factorial(n) {
  if (n === 1) {
    console.log("Reached base case: factorial(1) = 1");
    return 1;
  }

  console.log(`Calling factorial(${n}) => ${n} * factorial(${n - 1})`);
  return n * factorial(n - 1);
}


