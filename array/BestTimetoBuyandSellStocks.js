// function efccRecoveryProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   console.log("🔍 EFCC is tracking the wallet transaction pattern...");
//   for (let day = 0; day < prices.length; day++) {
//     const price = prices[day];
//     console.log(`📅 Day ${day + 1}: Price = ₦${price}`);
//     console.log(`💰 Current minPrice: ₦${minPrice}, Current maxProfit: ₦${maxProfit}`);
//     if (price < minPrice) {
//       minPrice = price;
//       console.log(`🛒 EFCC Decision: Buy here! New minimum found: ₦${minPrice}`);
//       console.log(` Day ${day + 1} minPrice: ₦${minPrice}`);
//     } else {
//       const profit = price - minPrice;
//       console.log(`📊 Formula: profit = ₦${price} - ₦${minPrice} = ₦${profit}`);
//       if (profit > maxProfit) {
//         maxProfit = profit;
//         console.log(`✅ Better profit found! Max profit updated to ₦${maxProfit}`);
//       } else {
//         console.log(`⚠️ Not a better deal. Max profit still ₦${maxProfit}`);
//       }
//     }
//     console.log(`➡️ End of Day ${day + 1}: minPrice = ₦${minPrice}, maxProfit = ₦${maxProfit}\n`);
//   }

//   console.log(`🔚 EFCC final decision: Max recoverable profit = ₦${maxProfit}`);
//   return maxProfit;
// }

// const efccPrices = [200, 120, 350, 300, 400, 150,100];
// // efccRecoveryProfit(efccPrices);


// function opaySettlementProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   console.log("🚀 Opay analyzing bank settlement speeds...");
//   for (let i = 0; i < prices.length; i++) {
//     const today = i + 1;
//     const price = prices[i];
//     console.log(`📅 Day ${today}: Settlement delay cost = ₦${price}`);

//     if (price < minPrice) {
//       minPrice = price;
//       console.log(`📌 Opay Insight: Cheapest delay so far. Save money if delayed now: ₦${minPrice}`);
//     } else {
//       const profit = price - minPrice;
//       console.log(`📘 Formula: profit = ₦${price} - ₦${minPrice} = ₦${profit}`);
//       if (profit > maxProfit) {
//         maxProfit = profit;
//         console.log(`📈 Opay Decision: Best delay optimization found! Profit = ₦${maxProfit}`);
//       }
//     }
//     console.log(`🧾 Summary: minDelay = ₦${minPrice}, maxSavings = ₦${maxProfit}\n`);
//   }

//   console.log(`🎯 Final Result: Max delay savings = ₦${maxProfit}`);
//   return maxProfit;
// }

// const opayDelays = [300, 270, 290, 310, 250, 330];
// opaySettlementProfit(opayDelays);


function opaySettlementProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  console.log("🚀 Opay analyzing bank settlement speeds...");
  for (let i = 0; i < prices.length; i++) {
    const today = i + 1;
    const price = prices[i];
    console.log(`📅 Day ${today}: Settlement delay cost = ₦${price}`);

    if (price < minPrice) {
      minPrice = price;
      console.log(`📌 Opay Insight: Cheapest delay so far. Save money if delayed now: ₦${minPrice}`);
    } else {
      const profit = price - minPrice;
      console.log(`📘 Formula: profit = ₦${price} - ₦${minPrice} = ₦${profit}`);
      if (profit > maxProfit) {
        maxProfit = profit;
        console.log(`📈 Opay Decision: Best delay optimization found! Profit = ₦${maxProfit}`);
      }
    }
    console.log(`🧾 Summary: minDelay = ₦${minPrice}, maxSavings = ₦${maxProfit}\n`);
  }

  console.log(`🎯 Final Result: Max delay savings = ₦${maxProfit}`);
  return maxProfit;
}

const opayDelays = [300, 270, 290, 310, 250, 330];
opaySettlementProfit(opayDelays);
