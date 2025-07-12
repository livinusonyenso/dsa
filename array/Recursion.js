function collectMoneyFromClass(n) {
  console.log(`Student ${n} asked to collect ₦1`);

  if (n === 1) {
    console.log(`Student 1 collects ₦1 and stops`);
    return 1;
  }

  const collected = collectMoneyFromClass(n - 1); // collect from the next person
  const total = n + collected;
  console.log(`Student ${n} adds their ₦1: ${n} + ${collected} = ${total}`);
  return total;
}

// Try with 5 students
const totalMoney = collectMoneyFromClass(5);
console.log(`\nTotal money collected by Class Captain: ₦${totalMoney}`);
