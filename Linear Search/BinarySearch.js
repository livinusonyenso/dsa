// Low (start of array)
// High (end of array)

// Repeat:
//     1. Find middle: mid = Math.floor((low + high) / 2)
//     2. If array[mid] === target -> Found
//     3. If array[mid] < target → move right (low = mid + 1)
//     4. If array[mid] > target → move left (high = mid - 1)
// Until low > high → not found

const score = [10,80,30,40,50,60]
  
  function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    console.log(`Checking index ${mid}: ${array[mid]}`);
 
    if (array[mid] === target) {
      console.log(` Found "${target}" at index ${mid}`);
      return mid;
    } else if (array[mid] < target) {
      console.log(` Go right (value is bigger than ${array[mid]})`);
      low = mid + 1;
    } else {
      console.log(` Go left (value is smaller than ${array[mid]})`);
      high = mid - 1;
    }
  }

  console.log(` "${target}" not found.`);
  return -1;
}

console.log(binarySearch(score,50))