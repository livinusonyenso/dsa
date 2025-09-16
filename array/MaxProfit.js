// const maxProfit = (prices) =>{
    
//     let minPrice = prices[0]

//     let maxProfit = 0

//     for(let i = 1; i < prices.length; i++){
//         const currentPrice = prices[i]
//         console.log("currentPrice",currentPrice);
//         //update the minimue price if the minmuim price is found
      
//         minPrice =  Math.min(minPrice,currentPrice)
//       console.log(minPrice);

//       const potentialProfit  = currentPrice - minPrice
// console.log("potentialProfit",potentialProfit);

// maxProfit = Math.max(maxProfit,potentialProfit)

      
        
// //     }
// // return maxProfit;

// // }

// // const prices = [7,1,5,3,6,4]
// // const profit = maxProfit(prices)
// // console.log("maximum profit",profit);

// const MaxProfit = (prices) =>{
// let minProfit = prices[0]
// let maxProfit = 0;

// for(i = 1; i < prices.length; i++){
//     const currentPrice = prices[i]
//     minProfit = Math.min(minProfit,currentPrice)
//     console.log(minProfit);
//     const potentialProfit = currentPrice -minProfit
//     console.log("potentialProfit",potentialProfit);
//    maxProfit= Math.max(maxProfit,potentialProfit)
//    console.log(maxProfit);
   
    
// }

// return maxProfit
// }

// const prices = [7,1,5,3,6,4]
// const profit = MaxProfit(prices)
// console.log("maximum profit",profit);



const maxProfitInest = (prices) =>{

    let minProfit = prices[0];
    let maxprofit = 0;

    for(let i = 1; i < prices.length; i++){
        const currentPrice = prices[i]
        console.log("currentPrice",currentPrice);
        

       minProfit = Math.min(minProfit,currentPrice)
       console.log("minProfit",minProfit);
       
       const potentialProfit = currentPrice - minProfit
       console.log("potentialProfit",potentialProfit);

       maxprofit = Math.max(maxprofit,potentialProfit)
       console.log("MaxProfit>",maxprofit);
       
       
    }
    return maxprofit
}

const Tradingprices = [7,5,1,3,2,6]
const maxprofit = maxProfitInest(Tradingprices)
console.log("maxprofit>>>>>>>>",maxprofit);

