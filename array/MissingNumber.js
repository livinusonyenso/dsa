const transactionIDs = [0, 1, 2, 4, 5]; 

function findMissingTransactionID(transactions) {
  const n = transactions.length;
  const expectedSum = ((n + 1) * (n + 2)) / 2 - 1; 
  const actualSum = transactions.reduce((sum, t) => sum + t, 0);
  return expectedSum - actualSum;
}

console.log(" Missing Transaction ID:", findMissingTransactionID(transactionIDs)); 