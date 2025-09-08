// Steps to create a Palindromes 
//1. convert the string to array split("")
//2  reverse the array useing reverse()
//3. convert it back to string using join("")
//4 compare the new sring with the old string 



const palinedromes1 = str => str.split("").reverse().join("") === str

console.log(palinedromes1("onyenso"));
console.log(palinedromes1("ono"));
console.log(palinedromes1("abba"));


// If you have an array of data
const words = ["onyenso", "ono", "abba", "hello", "level"];
const palindrome2 = str => str === str.split("").reverse().join("");

const palindromes = words.filter(palindrome2);

console.log(palindromes); // ["ono", "abba", "level"]


//A more efficient approach is to use two pointers without reversing:
const palindrome3 = str => {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};
