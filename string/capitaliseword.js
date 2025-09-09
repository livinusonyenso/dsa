// 1. take the word and convert it to array(split method)
//2. map over the array(map)
//3. convert it back to strring using (join)


const capitalised = str => {
    return str.toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}

console.log(capitalised("hello world"));
