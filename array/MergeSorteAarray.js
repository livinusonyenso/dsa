function mergeCBNTransactions(opay, moniepoint) {
  const merged = [];
  let i = 0; 
  let j = 0; 

  // Simulate merging from OPay and Moniepoint like CBN log aggregation
  for (let k = 0; k < opay.length + moniepoint.length; k++) {
    console.log(` Stage ${k + 1}:`);
    console.log(` OPay[i=${i}] = ${opay[i]}, Moniepoint[j=${j}] = ${moniepoint[j]}`);

    if (i < opay.length && (j >= moniepoint.length || opay[i] < moniepoint[j])) {
      console.log(` CBN selects transaction from  OPay: ${opay[i]}`);
      merged.push(opay[i]);
      i++;
    } else if (j < moniepoint.length) {
      console.log(`CBN selects transaction from  Moniepoint: ${moniepoint[j]}`);
      merged.push(moniepoint[j]);
      j++;
    }
    
    console.log(` Current merged transactions: [${merged.join(', ')}]`);
    console.log("--------------------------------------------------");
  }

  return merged;
}

const result = mergeCBNTransactions([100, 300, 500], [200, 400, 600]);
console.log("📦 Final Merged Timeline for EFCC Review:");
console.log(result);
