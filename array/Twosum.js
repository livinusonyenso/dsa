// function twoSum(nums,target){
//     //loop through the number in the list
//     for(let i = 0;i < nums.length; i++){
//         // for each number check the rest of the list
//         for(let j = i + 1; j < nums.length; j++){
//             //if the current number and the one we are checking add up to the target,return their indexes
// if(nums[i] + nums[j] === target){
//     return [i,j];
// }
//         }
        
//     }
//     return [];
// }

// const res = twoSum([2,7,11,12,10],9);
// console.log("---------------",res);


const twoSum = (nums,target) =>{
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
    return []

}

const arr = [2,7,12,15,19]
const res = twoSum(arr,9)
const res2 = twoSum(arr,14)
console.log(res);
console.log(res2);


//Hash Map
const twoSum2 = (nums, target) => {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement), i]; // indices of match
        }

        seen.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2,7,12,15,19], 14)); // [0, 2]


//Two Pointers
const twoSumSorted = (nums, target) => {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) return [left, right];
        if (sum < target) left++;
        else right--;
    }
    return [];
}

console.log(twoSumSorted([2,7,12,15,19], 14)); // [0, 2]
