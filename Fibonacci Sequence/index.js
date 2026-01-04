// 1. The Basics: What Is the Fibonacci Sequence?
// The Fibonacci Sequence is a series of numbers where each number is the sum of the two numbers before it. Simple as that.
// It starts like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// The pattern:

// Start with 0 and 1
// Add them: 0 + 1 = 1
// Add the last two: 1 + 1 = 2
// Keep going: 1 + 2 = 3, then 2 + 3 = 5, then 3 + 5 = 8, and so on

// The golden rule: fib(n) = fib(n-1) + fib(n-2)

const Fibonacci = (n) =>{
    const fib = [0,1]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(Fibonacci(0));
console.log(Fibonacci(1));
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(4));
console.log(Fibonacci(5));
console.log(Fibonacci(6));
