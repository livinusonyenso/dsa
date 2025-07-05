const num = [2, 3, 3, 2,200, 0, 500, 0, 100],
  val = 3;

function RemoveElement(num, value) {
  let left = 0;
  console.log("👉 Initial Left (write position):", left);
  for (let right = 0; right < num.length; right++) {
    console.log(`🔁 Right pointer at index ${right}, value: ${num[right]}`);
    if (num[right] !== value) {
      console.log(
        `✅ Transaction ${num[right]} is valid. Move it to position ${left}`
      );
      num[left] = num[right];
      left++;
      console.log("🟢 Updated Array:", num);
      console.log("➡️ Left now becomes:", left);
    }
  }
}

//const remove = RemoveElement(num, val);


function RemoveFailedTransactions(transactions, failedCode) {
  let left = 0;
  console.log("Removing failed Opay transactions...");

  for (let right = 0; right < transactions.length; right++) {
    console.log(` Checking transaction at index ${right}: ₦${transactions[right]}`);

    if (transactions[right] !== failedCode) {
      console.log(` Valid transaction ₦${transactions[right]}. Moving to index ${left}`);
      transactions[left] = transactions[right];
      left++;
      console.log(" Updated Transactions:", transactions);
    } else {
      console.log(` Skipped failed transaction: ₦${transactions[right]}`);
    }
  }

  console.log(`\n Cleaned transactions (${left} total):`, transactions.slice(0, left));
  return left;
}

const opayTxns = [200, 0, 500, 0, 100];
//RemoveFailedTransactions(opayTxns, 0);


function FilterPassedStudents(scores, failMark) {
  let left = 0;
  console.log(" Filtering out failed JAMB scores...");

  for (let right = 0; right < scores.length; right++) {
    console.log(` Checking student at index ${right}: score ${scores[right]}`);

    if (scores[right] !== failMark) {
      console.log(`Passed with ${scores[right]}. Move to index ${left}`);
      scores[left] = scores[right];
      left++;
      console.log(" Updated Scores:", scores);
    } else {
      console.log(`Failed with ${scores[right]} – Removed`);
    }
  }

  console.log(`\n Passed students (${left} total):`, scores.slice(0, left));
  return left;
}

const jambScores = [250, 100, 180, 100, 270];
//FilterPassedStudents(jambScores, 100);


function CleanMarketPrices(prices, fakePrice) {
  let left = 0;
  console.log(" Cleaning fake prices from product list...");

  for (let right = 0; right < prices.length; right++) {
    console.log(` Checking price at index ${right}: ₦${prices[right]}`);

    if (prices[right] !== fakePrice) {
      console.log(` Valid price ₦${prices[right]}. Placed at index ${left}`);
      prices[left] = prices[right];
      left++;
      console.log(" Updated Prices:", prices);
    } else {
      console.log(` Invalid price ₦${prices[right]} – Removed`);
    }
  }

  console.log(`\n Final valid prices (${left}):`, prices.slice(0, left));
  return left;
}

const productPrices = [1000, -1, 2500, 3000, -1, 1500];
//CleanMarketPrices(productPrices, -1);
