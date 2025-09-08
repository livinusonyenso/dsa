//To reverse string first to in to  array using method called split("")"
// Then reverse the array using reverse() method
// finally join the array using join("") method"

const reversItem = (str)=> str.split("").reverse().join("");
console.log(reversItem("apple"));
