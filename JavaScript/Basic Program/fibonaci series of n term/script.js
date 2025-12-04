
let a =parseInt( prompt("Enter the number of terms for Fibonacci series:"));

function fibonacci(n) {
    let fibSeries = [];
    let a = 0, b = 1, nextTerm;
    
    for (let i = 1; i <= n; i++) {
        fibSeries.push(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    return fibSeries;
}

let result = fibonacci(a);
alert(`Fibonacci series of   ${a} terms: ${result.join(",")}`);
