//steps to follow
//1. convert the Number to string(toString())
//. convert the string to arrray(split(""))
//3. reverse the array(reverse())
//4. convert the array back to string(join(""))
//5. convert the string back to number (parseInt())
//. return the number

const Reversinter = (n) =>{
    const rversed = n.toString().split("").reverse().join("");
    return parseInt(rversed) * Math.sign(n)
}

console.log(Reversinter(-12345));


//Other Ways to Achieve This
const reverseInt = (n) => {
  let reversed = 0;
  let num = Math.abs(n);

  while (num > 0) {
    reversed = reversed * 10 + (num % 10); // get last digit
    num = Math.floor(num / 10); // remove last digit
  }

  return reversed * Math.sign(n);
};

console.log(reverseInt(-12345)); // -54321
