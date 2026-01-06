const factoria = (n) => {
    let result = 1;
    for(let i = 2; i < n; i++){
        result = result * i
    }
return result
}

console.log(factoria(0));
console.log(factoria(1));
console.log(factoria(5));
console.log(factoria(5));
console.log(factoria(6));
