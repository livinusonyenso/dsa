const airtimeRecharges = [200, 500, 100, 300, 1000]; 

function totalRecharge(recharges, i = 0) {
  if (i >= recharges.length) return 0;

  console.log(`Day ${i + 1}: ₦${recharges[i]}`);
  return recharges[i] + totalRecharge(recharges, i + 1);
}

console.log("Total Airtime Spent: ₦" + totalRecharge(airtimeRecharges));
