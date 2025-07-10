// const transacrionId = [101, 205, 101, 332, 205]
// let singleId = 0;

// for( let i = 0; i< transacrionId.length; i++){
//     console.log(transacrionId[i])
//     singleId = singleId ^ transacrionId[i];
    
// }
// console.log(`the failured transaction ID is ${singleId}`)

// const transacrionId = [101,205,101,205,442]

// let singleIdId = 0;

// for(let i = 0; i<transacrionId.length; i++){
//     console.log('transactionId',transacrionId[i])
//     singleIdId =  singleIdId ^ transacrionId[i]
// }

// console.log('the failed transaction id is',singleIdId)

const orderID = [9021,1023,9021,1023,4057,4057,2013]

let singleIdId = 0;

for(let id of orderID){
    console.log(id)
    singleIdId ^= id


}

console.log(singleIdId)