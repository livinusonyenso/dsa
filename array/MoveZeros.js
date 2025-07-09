function cleanOpayTransactions(arr) {
  let lastValid = 0;

  console.log("📦 Initial Transactions:", [...arr], "\n");

  for (let current = 0; current < arr.length; current++) {
    console.log(`🔍 Checking index ${current}: ${arr[current]}`);

    if (arr[current] !== 0) {
      console.log(` Found valid transaction at index ${current}: "${arr[current]}"`);

      if (current !== lastValid) {
        // Swap current and lastValid
        console.log(` Swapping "${arr[current]}" (index ${current}) with "${arr[lastValid]}" (index ${lastValid})`);
        let temp = arr[current];
        arr[current] = arr[lastValid];
        arr[lastValid] = temp;
      } else {
        console.log(" No swap needed, already in correct position");
      }

      lastValid++;
    } else {
      console.log(`Found failed transaction (0) at index ${current}`);
    }

    console.log(" Current state of array:", [...arr], "\n");
  }

  console.log(" Final Cleaned Transactions:", arr);
  return arr;
}

let transactions = [
  0,
  "₦200 - Airtime Purchase",
  "₦1500 - Fund Transfer to Moniepoint",
  0,
  "₦500 - Electricity Bill",
  "₦7000 - Loan Repayment",
  0
];

cleanOpayTransactions(transactions);
